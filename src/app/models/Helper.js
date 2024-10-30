import { propertyData } from "./newArrivals";

export const getDisplayText = (param, filter) => {
  // Define a mapping for filter conditions
  const filterMapping = {
    sale: "Sale",
    "all-properties": filter === "rent" ? "Rent" : "Sale",
    rent: "Rent",
    shortlet: "Shortlet",
  };

  // Handle shortlet in specific cities
  if (param.startsWith("shortlet-") && param !== "shortlet-all") {
    const city = param.split("-")[1];
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
    return `Shortlet in ${capitalizedCity}`;
  }

  // Handle all categories for shortlet
  if (param === "shortlet-all") {
    return "Shortlet in All Categories";
  }

  // Define text based on other param and filter conditions
  if (param === "flat-apartment") {
    return `Flats & Apartments available for ${
      filterMapping[filter] || filter
    }`;
  } else if (param === "all-properties") {
    // Adjust text based on whether the filter is "rent" or other
    return `All Properties available for ${filterMapping[filter] || filter}`;
  } else {
    return `${param.charAt(0).toUpperCase() + param.slice(1)} for ${
      filterMapping[filter] || filter
    }`;
  }
};

export const getRefinedText = (
  param,
  filter,
  averagePrice,
  highestPrice,
  lowestPrice,
  totalCount
) => {
  // If all values are zero, display a different message
  if (
    averagePrice === 0 &&
    highestPrice === 0 &&
    lowestPrice === 0 &&
    totalCount === 0
  ) {
    return (
      <p className="mb-40">
        Sorry, we don&apos;t have anything to show for this category at the
        moment.
      </p>
    );
  }

  // Format param and location for display
  let propertyType = param.replace(/-/g, " ");
  let location = "";

  // Handle specific cases for shortlet locations
  if (param.startsWith("shortlet")) {
    switch (param) {
      case "shortlet-all":
        location = "all locations";
        break;
      case "shortlet-abuja":
        location = "Abuja";
        break;
      case "shortlet-lagos":
        location = "Lagos";
        break;
      case "shortlet-ibadan":
        location = "Ibadan";
        break;
      default:
        location = "";
    }
    propertyType = "Shortlet";
  } else if (param === "all-properties") {
    propertyType = "all properties";
  }

  // Adjust "sale" text and other formatting
  const actionText = param === "sale" ? "sales" : filter ? `for ${filter}` : "";

  // Return the formatted display text
  return (
    <>
      The average price of {propertyType} {location ? `in ${location}` : ""}{" "}
      {actionText ? actionText : ""} is <strong>{averagePrice}</strong>. The
      most expensive {propertyType.toLowerCase()} costs{" "}
      <strong>{highestPrice}</strong>, while the cheapest costs{" "}
      <strong>{lowestPrice}</strong>. We have a total of{" "}
      <strong>{totalCount}</strong> {propertyType.toLowerCase()}{" "}
      {actionText ? actionText : ""} across different states in Nigeria. Refine
      your property search by price, number of beds, and type of property.
    </>
  );
};

export const calculatePrices = (param, filter = "all") => {
  // Filter `allProperties` based on `param` and optional `filter`
  const filteredProperties = propertyData.allProperties.filter((item) => {
    // Check for main categories
    if (param === "all-properties") {
      return filter === "all" || item.type === filter;
    }
    if (param === "house") {
      return (
        item.category === "house" && (filter === "all" || item.type === filter)
      );
    }
    if (param === "land") {
      return (
        item.category === "land" && (filter === "all" || item.type === filter)
      );
    }
    if (param === "commercial-property") {
      return (
        item.category === "commercial property" &&
        (filter === "all" || item.type === filter)
      );
    }

    // Handle shortlet-specific cases
    if (param.startsWith("shortlet")) {
      if (param === "shortlet-all") {
        return (
          item.type === "shortlet" && (filter === "all" || item.type === filter)
        );
      }
      // Extract city from param, e.g., "shortlet-abuja" -> "abuja"
      const city = param.split("-")[1];
      return (
        item.type === "shortlet" &&
        item.state.toLowerCase() === city &&
        (filter === "all" || item.type === filter)
      );
    }

    return false;
  });

  // If no properties match the filter, return default values
  if (filteredProperties.length === 0) {
    return {
      highestPrice: 0,
      lowestPrice: 0,
      averagePrice: 0,
      totalCount: 0,
    };
  }

  // Extract prices, remove commas, convert to numbers, and filter out any non-numeric values
  const prices = filteredProperties
    .map((item) => parseFloat(item.price.replace(/,/g, ""))) // Remove commas before parsing
    .filter((price) => !isNaN(price)); // Exclude invalid prices

  // Calculate highest, lowest, and average price
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  const averagePrice = Math.round(
    prices.reduce((acc, price) => acc + price, 0) / prices.length
  );

  // Format prices with commas
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", { style: "decimal" }).format(price);
  };

  return {
    highestPrice: formatPrice(highestPrice),
    lowestPrice: formatPrice(lowestPrice),
    averagePrice: formatPrice(averagePrice),
    totalCount: filteredProperties.length,
  };
};
