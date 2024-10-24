import Image from "next/image";
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
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ShowCard = ({
  image,
  title,
  description,
  location,
  price,
  number_of_bedrooms,
  number_of_bathrooms,
  image_count,
  type,
  video,
}) => {
  return (
    <div className="bg-[#FFF1F0] flex flex-col mb-3 rounded-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          style={{
            objectFit: "cover",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
          }}
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-xl font-bold line-clamp-1">{title}</h1>
        <h1 className="text-xl font-bold text-[#008080] flex items-center line-clamp-1">
          <svg
            className="icon icon-tabler icon-tabler-currency-naira"
            fill="none"
            height="18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M7 18v-10.948a1.05 1.05 0 0 1 1.968 -.51l6.064 10.916a1.05 1.05 0 0 0 1.968 -.51v-10.948" />
            <path d="M5 10h14" />
            <path d="M5 14h14" />
          </svg>
          {price}
        </h1>
        <p className="text-gray-700 line-clamp-2">{description}</p>
        <div className="flex items-center gap-2">
          <p className="text-gray-700 text-sm flex items-center">
            <LocationOnIcon sx={{ color: "#4B4B4B" }} />
            {location}
          </p>
          {number_of_bathrooms && number_of_bedrooms && (
            <div className="flex items-center gap-2">
              <p className="text-gray-700 text-sm flex items-center gap-2">
                <BathroomIcon sx={{ color: "#4B4B4B" }} fontSize="small"/>
                {number_of_bathrooms}
              </p>
              <p className="text-gray-700 text-sm flex items-center gap-2">
                <HotelIcon sx={{ color: "#4B4B4B" }} fontSize="small"/>
                {number_of_bedrooms}
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="text-gray-700 text-sm flex items-center gap-2">
            <PhotoCameraIcon sx={{ color: "#4B4B4B" }} fontSize="small"/>
            {image_count}
          </div>
          {video && (
            <div className="text-gray-700 text-sm flex items-center gap-2">
              <VideocamIcon sx={{ color: "#4B4B4B" }} fontSize="small"/>
              {video && "video available"}
            </div>
          )}

          <Chip
            label={type}
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
        <div className="flex items-center gap-2">
          <Checkbox
            {...label}
            icon={<FavoriteBorder sx={{ color: "#ff8433" }} fontSize="small"/>}
            checkedIcon={<Favorite fontSize="small"/>}
          />
          <IconButton>
            <FacebookIcon sx={{ color: "#ff8433" }} fontSize="small"/>
          </IconButton>
          <IconButton>
            <XIcon sx={{ color: "#ff8433" }} fontSize="small"/>
          </IconButton>
          <IconButton>
            <WhatsAppIcon sx={{ color: "#ff8433" }} fontSize="small"/>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;