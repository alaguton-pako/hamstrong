"use client";
import NavBar from "@/app/components/NavBar";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import DropDownComponent from "@/app/components/formComponents/DropDownComponent";
import { Divider, Button } from "@mui/material";
import SearchInput from "@/app/components/formComponents/SearchComponent";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PropertyCard from "@/app/components/cards/PropertyCard";
import Footer from "@/app/components/Footer";

const Page = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const param = params.param;
  const filter = searchParams.get("type");
  const initialCategoryValue = param.startsWith("shortlet")
    ? "shortlet"
    : param;
  const [selectedValue, setSelectedValue] = useState(
    filter === "buy" || filter === "all" ? "sales" : filter
  );
  const [selectedBedroomValue, setSelectedBedroomsValue] = useState("Bedrooms");
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
  ];

  const categoryOptions = [
    { value: "all-properties", label: "All Properties" },
    { value: "house", label: "House" },
    { value: "land", label: "Land" },
    { value: "commercial-property", label: "Commercial" },
    { value: "shortlet", label: "Shortlet" },
  ];

  const handleSearch = (term) => {
    console.log("Searching for:", term);
  };

  return (
    <div>
      <NavBar />
      <Divider />
      <div className="mt-4">
        <div className="p-4 flex items-center gap-2 shadow-xl">
          <DropDownComponent
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            options={type}
          />
          <SearchInput
            placeholder="Search for properties..."
            onSearch={handleSearch}
          />
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
          <DropDownComponent
            value={selectedCategoryValue}
            onChange={(e) => setSelectedCategoryValue(e.target.value)}
            options={categoryOptions}
          />

          <Button
            variant="contained"
            sx={{
              textTransform: "initial",
            }}
          >
            apply filter
          </Button>

          <Button
            variant="contained"
            endIcon={<ErrorOutlineIcon color="info" />}
            sx={{
              textTransform: "initial",
            }}
            disabled
          >
            Remove filters
          </Button>
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
          <p className="text-2xl font-semibold text-[#3d4578]">
            {param && param === "flat-apartment"
              ? `Flats & Apartment available for ${
                  filter === "buy" || filter === "all-properties"
                    ? "Sale"
                    : filter
                }`
              : param === "all-properties"
              ? `All Properties available for Sale`
              : param}
          </p>
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-8">
              <div className="flex flex-col gap-2">
                <p className="text-[#404b82] text-[0.8rem]">
                  The average price of houses for sale is{" "}
                  <span className="font-semibold text-[#1b245d]">
                    ₦108,096,400
                  </span>{" "}
                  The most expensive house costs{" "}
                  <span className="font-semibold text-[#1b245d]">
                    ₦1,000,000,000
                  </span>
                  . while the cheapest costs{" "}
                  <span className="font-semibold text-[#1b245d]">
                    ₦1,550,000
                  </span>
                  . We have a total of <span>3,391</span> Flat Apartment for
                  sale in Nigeria updated on 10 Oct 2024. Among these properties
                  are houses, lands, shops, apartments, flats and commercial
                  spaces . Every Real Estate in Nigeria posted on this site is
                  verified by real estate agents . We also have cheap houses for
                  rent and cheap houses for sale . Refine your property search
                  by price, number of beds and type of property.
                </p>
                <PropertyCard props={param} />
              </div>
            </div>
            <div className="col-span-4">
              <div className="border border-[#b8bde0] rounded-md p-2 flex flex-col gap-2">
                <h1 className="text-[#3d4578] font-semibold">Explore States</h1>
                <Divider />
                <div class="flex flex-wrap gap-4">
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Lagos
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Kano
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Rivers
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Kaduna
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Oyo
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Enugu
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Abuja
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Anambra
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Ogun
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Edo
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Cross River
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Plateau
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Delta
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Ekiti
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Osun
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Ondo
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Borno
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Imo
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Bauchi
                  </div>
                  <div class="text-[#1a2258] cursor-pointer hover:font-semibold">
                    Katsina
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
