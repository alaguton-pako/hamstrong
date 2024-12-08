"use client";
import NavBar from "@/app/components/NavBar";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import DropDownComponent from "@/app/components/formComponents/DropDownComponent";
import { Divider, Button } from "@mui/material";
import SearchInput from "@/app/components/formComponents/SearchComponent";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PropertyCard from "@/app/components/cards/PropertyCard";
import Footer from "@/app/components/Footer";
import { getDisplayText, getRefinedText } from "@/app/models/Helper";
import { calculatePrices } from "@/app/models/Helper";

const Page = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const param = params.param;
  const filter = searchParams.get("type");
  const [filterPayload, setFilterPayload] = useState({});
  const initialCategoryValue = param.startsWith("shortlet")
    ? "shortlet"
    : param;
  const [selectedValue, setSelectedValue] = useState(
    filter === "buy" || filter === "all" ? "sales" : filter
  );
  const [filterByState, setFilterByState] = useState("");

  // Array of state names
  const states = [
    "Lagos",
    "Kano",
    "Rivers",
    "Kaduna",
    "Oyo",
    "Enugu",
    "FCT",
    "Anambra",
    "Ogun",
    "Edo",
    "Cross river",
    "Plateau",
    "Delta",
    "Ekiti",
    "Osun",
    "Ondo",
    "Borno",
    "Imo",
    "Bauchi",
    "Katsina",
  ];

  // Handler to set filter by state
  const handleFilterByState = (state) => setFilterByState(state);

  useEffect(() => {
    setSelectedValue(filter === "sale" || filter === "all" ? "sales" : filter);
  }, [filter]);

  const [selectedBedroomValue, setSelectedBedroomsValue] = useState("Bedrooms");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMinPriceValue, setSelectedMinPriceValue] =
    useState("Min Price");
  const [selectedMaxPriceValue, setSelectedMaxPriceValue] =
    useState("Max Price");
  const [selectedCategoryValue, setSelectedCategoryValue] =
    useState(initialCategoryValue);

  const type = [
    { value: "sales", label: "Sale" },
    { value: "rent", label: "Rent" },
    { value: "shortlet", label: "Shortlet" },
  ];

  const bedroomOptions = [
    { value: "Bedrooms", label: "Bedrooms" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ];

  const minPriceOptions = [
    { value: "Min Price", label: "Min Price" },
    { value: 50000, label: "50,000" },
    { value: 100000, label: "100,000" },
    { value: 200000, label: "200,000" },
  ];

  const maxPriceOptions = [
    { value: "Max Price", label: "Max Price" },
    { value: 500000, label: "500,000" },
    { value: 1000000, label: "1,000,000" },
    { value: 2000000, label: "2,000,000" },
    { value: 20000000, label: "20,000,000" },
    { value: 25000000, label: "25,000,000" },
    { value: 95000000, label: "95,000,000" },
  ];

  const categoryOptions = [
    { value: "all-properties", label: "All Properties" },
    { value: "house", label: "House" },
    { value: "land", label: "Land" },
    { value: "commercial-property", label: "Commercial" },
    { value: "shortlet", label: "Shortlet" },
  ];

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const { highestPrice, lowestPrice, averagePrice, totalCount } =
    calculatePrices(param, filter);

  const handleApplyFilter = () => {
    const toFilterWith = {
      number_of_bedrooms: selectedBedroomValue,
      minPrice: selectedMinPriceValue,
      maxPrice: selectedMaxPriceValue,
    };
    setFilterPayload(toFilterWith);
  };

  const handleClearFilter = () => {
    setSelectedBedroomsValue("Bedrooms");
    setSelectedMinPriceValue("Min Price");
    setSelectedMaxPriceValue("Max Price");
    setFilterPayload({});
  };

  return (
    <div>
      <NavBar />
      <Divider />
      <div className="mt-4">
        <div className="w-full md:max-w-[80%]  mx-auto">
          <div className="p-4 grid grid-cols-1 gap-2 shadow-lg md:grid-cols-12">
            {/* <DropDownComponent
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              options={type}
            /> */}
            <div className="col-span-12 md:col-span-5 mb-2 md:mb-0">
              <SearchInput
                placeholder="Search for properties..."
                onSearch={handleSearch}
              />
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="flex flex-col items-center gap-2 md:flex-row md:flex-wrap md:gap-2">
                <DropDownComponent
                  value={selectedBedroomValue}
                  onChange={(e) => setSelectedBedroomsValue(e.target.value)}
                  options={bedroomOptions}
                />
                <DropDownComponent
                  value={selectedMinPriceValue}
                  onChange={(e) => setSelectedMinPriceValue(e.target.value)}
                  options={minPriceOptions}
                />
                <DropDownComponent
                  value={selectedMaxPriceValue}
                  onChange={(e) => setSelectedMaxPriceValue(e.target.value)}
                  options={maxPriceOptions}
                />
                <div>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "initial",
                    }}
                    onClick={handleApplyFilter}
                    disabled={
                      selectedBedroomValue === "Bedrooms" &&
                      selectedMinPriceValue === "Min Price" &&
                      selectedMaxPriceValue === "Max Price"
                    }
                  >
                    Apply filters
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    // endIcon={
                    //   <ErrorOutlineIcon
                    //     sx={{
                    //       color: "red",
                    //     }}
                    //   />
                    // }
                    onClick={handleClearFilter}
                    sx={{
                      textTransform: "initial",
                    }}
                    disabled={
                      selectedBedroomValue === "Bedrooms" &&
                      selectedMinPriceValue === "Min Price" &&
                      selectedMaxPriceValue === "Max Price"
                    }
                  >
                    Clear filters
                  </Button>
                </div>
              </div>
            </div>
            {/* <DropDownComponent
              value={selectedCategoryValue}
              onChange={(e) => setSelectedCategoryValue(e.target.value)}
              options={categoryOptions}
            /> */}
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-10 max-w-[80%] mx-auto">
          <div className="flex items-center gap-2 text-gray-400">
            <Link href={"/"}>
              <p className="hover:font-semibold">Home</p>
            </Link>
            <KeyboardArrowRightIcon />
            <p>
              {param && param === "flat-apartment"
                ? `Flats & Apartment for ${
                    filter === "buy"
                      ? "Sale"
                      : filter === "all-properties"
                      ? "Sale"
                      : filter
                  }`
                : param === "all-properties"
                ? `All Properties for Sale`
                : param}
            </p>
          </div>
          <p className="text-2xl font-semibold text-[#3d4578] capitalize">
            {getDisplayText(param, filter)}
          </p>
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex flex-col gap-2">
                <p className="text-[#404b82] text-[0.8rem]">
                  {getRefinedText(
                    param,
                    filter,
                    averagePrice,
                    highestPrice,
                    lowestPrice,
                    totalCount
                  )}
                </p>
                {averagePrice !== 0 &&
                  highestPrice !== 0 &&
                  lowestPrice !== 0 &&
                  totalCount !== 0 && (
                    <PropertyCard
                      props={param}
                      filter={filter}
                      filterPayload={filterPayload}
                      searchTerm={searchTerm}
                      filterByState={filterByState}
                    />
                  )}
              </div>
            </div>
            {averagePrice !== 0 &&
              highestPrice !== 0 &&
              lowestPrice !== 0 &&
              totalCount !== 0 && (
                <div className="hidden lg:block col-span-4">
                  <div className="border border-[#b8bde0] rounded-md p-2 flex flex-col gap-2">
                    <div className="flex items-center gap-2 justify-between">
                      <h1 className="text-[#3d4578] font-semibold">
                        Explore States
                      </h1>
                      {filterByState && (
                        <Button
                          variant="contained"
                          sx={{
                            fontSize: "0.6rem",
                            textTransform: "initial",
                          }}
                          onClick={() => setFilterByState("")}
                        >
                          remove filter
                        </Button>
                      )}
                    </div>
                    <Divider />
                    <div className="flex flex-wrap gap-4">
                      {states.map((state) => (
                        <div
                          key={state}
                          className={`text-[#1a2258] capitalize cursor-pointer hover:font-semibold ${
                            filterByState === state ? "font-bold" : ""
                          }`}
                          onClick={() => handleFilterByState(state)}
                        >
                          {state}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
