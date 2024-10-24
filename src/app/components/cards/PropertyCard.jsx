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
import { Divider, IconButton } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import Pagination from "@mui/material/Pagination";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const PropertyCard = ({ props }) => {
  const [selectedValue, setSelectedValue] = useState("select");
  const sortType = [
    { value: "select", label: "select..." },
    { value: "lowest", label: "Lowest price" },
    { value: "highest", label: "Highest price" },
    { value: "bedspace", label: "Bed" },
  ];

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="flex flex-col gap-2">
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
        {propertyData.newArrivals.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFF1F0] flex gap-2 rounded-sm mb-3 p-2 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative w-[200px] h-[200px] flex-shrink-0">
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
              <div className="flex items-center gap-2">
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
                <Checkbox
                  {...label}
                  icon={
                    <FavoriteBorder
                      sx={{ color: "#ff8433" }}
                      fontSize="small"
                    />
                  }
                  checkedIcon={<Favorite fontSize="small" />}
                />
                <IconButton>
                  <FacebookIcon sx={{ color: "#ff8433" }} fontSize="small" />
                </IconButton>
                <IconButton>
                  <XIcon sx={{ color: "#ff8433" }} fontSize="small" />
                </IconButton>
                <IconButton>
                  <WhatsAppIcon sx={{ color: "#ff8433" }} fontSize="small" />
                </IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-3">
        <Pagination count={10} color="secondary" />
      </div>
    </div>
  );
};

export default PropertyCard;
