import { useState } from "react";
import DropDownComponent from "../formComponents/DropDownComponent";
import Image from "next/image";
import Link from "next/link";
import { propertyData } from "@/app/models/newArrivals";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import BathroomIcon from "@mui/icons-material/Bathroom";
import Chip from "@mui/material/Chip";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Divider } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import WhatsAppShareButton from "../buttons/WhatAppShareButton";
import FacebookShareButton from "../buttons/FaceBookShareButton";
// import TwitterShareButton from "../buttons/TwitterShareButton";
import CopyToClipboardButton from "../buttons/CopyToClipBoard";
import FavouriteButton from "../buttons/FavouriteButton";

const PropertyCard = ({ props, filter }) => {
  const [selectedValue, setSelectedValue] = useState("lowest");
  const sortType = [
    { value: "lowest", label: "Lowest price" },
    { value: "highest", label: "Highest price" },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  // Calculate the filtered items based on the props, filter, and selectedValue
  const filteredItems = propertyData.allProperties.filter((item) => {
    // Check for specific shortlet props and extract the state if applicable
    const isShortlet = props.startsWith("shortlet");
    const state = isShortlet ? props.split("-")[1] : null;

    const matchesType =
      props === "all-properties" ||
      (props === "shortlet-all" && item.type === "shortlet") ||
      (isShortlet && item.state === state) ||
      (props ? item.category === props : true);

    const matchesFilter = filter ? item.type === filter : true;

    // Convert price strings to numbers for comparison
    const priceNumber = parseInt(item.price.replace(/,/g, ""), 10);

    // Check for price filtering based on selectedValue
    let matchesPrice = true; // Default to true

    if (selectedValue === "lowest") {
      // You can adjust the lower and upper limits as needed
      matchesPrice = priceNumber >= 0; // Assuming no negative prices
    } else if (selectedValue === "highest") {
      // Assuming a maximum price limit for filtering
      matchesPrice = priceNumber <= Infinity; // Replace with an actual upper limit if needed
    }
    // Ensure that all checks are satisfied
    return matchesType && matchesFilter && matchesPrice;
  });
  // Sort filteredItems based on selectedValue
  if (selectedValue === "lowest") {
    filteredItems.sort(
      (a, b) =>
        parseInt(a.price.replace(/,/g, ""), 10) -
        parseInt(b.price.replace(/,/g, ""), 10)
    );
  } else if (selectedValue === "highest") {
    filteredItems.sort(
      (a, b) =>
        parseInt(b.price.replace(/,/g, ""), 10) -
        parseInt(a.price.replace(/,/g, ""), 10)
    );
  }
  // Calculate the items to show on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center my-3">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="standard"
          siblingCount={0}
          boundaryCount={2}
          hideNextButton={totalPages <= 0}
          hidePrevButton={totalPages <= 0}
        />
      </div>
      <div className="p-2 flex items-center justify-between">
        <div>
          <p className="text-sm text-[#1b245d]">Search Results</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm text-[#1b245d]">Sort</span>
          <DropDownComponent
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            options={sortType}
          />
        </div>
      </div>
      <div className="mt-4">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFF1F0] flex flex-col sm:flex-row gap-2 rounded-sm mb-3 p-2 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative w-full md:w-[200px] h-[200px] flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "0.5rem", // Updated for roundness
                }}
              />
            </div>
            {/* Content Section */}
            <div className="p-4 flex flex-col gap-2">
              <Link href={`/properties/${props}/${item.title}`}>
                <h1 className="text-xl font-bold hover:cursor-pointer line-clamp-1">
                  {item.title}
                </h1>
              </Link>
              <h1 className="text-xl font-bold text-[#008080] flex items-center line-clamp-1">
                <svg
                  className="icon icon-tabler icon-tabler-currency-naira"
                  fill="none"
                  height="20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                  <path d="M7 18v-10.948a1.05 1.05 0 0 1 1.968 -.51l6.064 10.916a1.05 1.05 0 0 0 1.968 -.51v-10.948" />
                  <path d="M5 10h14" />
                  <path d="M5 14h14" />
                </svg>
                {item.price}
              </h1>

              <p className="text-gray-700 line-clamp-2">{item.description}</p>

              {/* Location and Other Info */}
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-gray-700 text-sm flex items-center">
                  <LocationOnIcon sx={{ color: "#4B4B4B" }} />
                  {item.location}
                </p>
                {item.number_of_bathrooms && item.number_of_bedrooms && (
                  <div className="flex items-center gap-2">
                    <p className="text-gray-700 text-sm flex items-center gap-2">
                      <BathroomIcon
                        sx={{ color: "#4B4B4B" }}
                        fontSize="small"
                      />
                      {item.number_of_bathrooms}
                    </p>
                    <p className="text-gray-700 text-sm flex items-center gap-2">
                      <HotelIcon sx={{ color: "#4B4B4B" }} fontSize="small" />
                      {item.number_of_bedrooms}
                    </p>
                  </div>
                )}
              </div>

              {/* Additional Details */}
              <div className="flex items-center gap-2">
                <div className="text-gray-700 text-sm flex items-center gap-2">
                  <PhotoCameraIcon sx={{ color: "#4B4B4B" }} fontSize="small" />
                  {item.image_count}
                </div>
                {item.video && (
                  <div className="text-gray-700 text-sm flex items-center gap-2">
                    <VideocamIcon sx={{ color: "#4B4B4B" }} fontSize="small" />
                    {item.video && "video available"}
                  </div>
                )}

                <Chip
                  label={item.type}
                  size="small"
                  sx={{
                    fontWeight: "600",
                    borderRadius: "0.3rem",
                    color: "#fff",
                    bgcolor: "#ff8433",
                  }}
                />
              </div>

              <Divider />

              {/* Icons Section */}
              <div className="flex items-center gap-2">
                <FavouriteButton
                  title={item.title}
                  uuid={item.title}
                  location={item.location}
                />
                <Divider orientation="vertical" />
                <span className="hidden md:block text-xs text-gray-400 font-semibold">
                  share :{" "}
                </span>
                <FacebookShareButton
                  title={item.title}
                  description={item.description}
                  url={"https://hamstrongrealty.netlify.app/"}
                />
                {/* <TwitterShareButton
                  title={item.title}
                  description={item.description}
                  url={"https://hamstrongrealty.netlify.app/"}
                /> */}
                <WhatsAppShareButton
                  title={item.title}
                  description={item.description}
                  url={"https://hamstrongrealty.netlify.app/"}
                />
                <CopyToClipboardButton uuid={item.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-3">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="standard"
          siblingCount={1}
          boundaryCount={1}
          hideNextButton={totalPages <= 0}
          hidePrevButton={totalPages <= 0}
        />
      </div>
    </div>
  );
};

export default PropertyCard;
