import { LocationOnSharp } from "@mui/icons-material";
import { Divider } from "@mui/material";
import React from "react";

const PropertyInfoCard = ({ property }) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
        {/* Left side (Price and Location) */}
        <div className="flex flex-col xl:flex-row xl:items-center gap-2">
          {/* price */}
          <div className="flex items-center">
            <h1 className="text-lg md:text-xl font-bold text-[#008080] flex items-center">
              <svg
                className="icon icon-tabler icon-tabler-currency-naira"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                <path d="M7 18v-10.948a1.05 1.05 0 0 1 1.968 -.51l6.064 10.916a1.05 1.05 0 0 0 1.968 -.51v-10.948" />
                <path d="M5 10h14" />
                <path d="M5 14h14" />
              </svg>
              {property.price}
            </h1>
          </div>

          <div className="hidden xl:block w-[0.1rem] h-10 bg-gray-400"></div>

          {/* location */}
          <div className="flex items-start gap-1">
            <LocationOnSharp
              fontSize="small"
              sx={{
                color: "#3d4578",
              }}
            />
            <p className="text-sm text-[#3d4578]">{property.location}</p>
          </div>
        </div>

        {/* Right side (Icons for rooms, bathrooms, etc.) */}
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 mt-2 lg:mt-0">
          <div className="w-[0.1rem] h-10 bg-gray-400 hidden lg:block"></div>

          {/* bed space */}
          {property.number_of_bedrooms && (
            <div className="flex items-center gap-2">
              <svg
                height="30"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                }}
                version="1.1"
                viewBox="0 0 32 32"
                width="30"
              >
                <rect
                  height="2.934"
                  style={{ fill: "none", stroke: "#000", strokeWidth: "0.7px" }}
                  width="1.734"
                  x="2"
                  y="22.455"
                />
                <rect
                  height="2.934"
                  style={{ fill: "none", stroke: "#000", strokeWidth: "0.7px" }}
                  width="1.734"
                  x="28.266"
                  y="22.455"
                />
                <path
                  d="M2,16.938l0,3.974l28,-0l-0,-3.974c-0,-0.731 -0.594,-1.324 -1.325,-1.324l-25.35,-0c-0.731,-0 -1.325,0.593 -1.325,1.324Z"
                  style={{ fill: "none", stroke: "#000", strokeWidth: "0.7px" }}
                />
                <path
                  d="M4.312,8.862l0,6.752l23.376,-0l-0,-6.752c-0,-1.242 -0.496,-2.251 -1.106,-2.251l-21.164,0c-0.61,0 -1.106,1.009 -1.106,2.251Z"
                  style={{ fill: "none", stroke: "#000", strokeWidth: "0.7px" }}
                />
                <rect
                  height="1.543"
                  style={{ fill: "none", stroke: "#000", strokeWidth: "0.7px" }}
                  width="28"
                  x="2"
                  y="20.912"
                />
                <path
                  d="M14.583,13.368c0,-0.413 -0.335,-0.748 -0.748,-0.748l-6.535,0c-0.413,0 -0.748,0.335 -0.748,0.748l-0,1.497c-0,0.413 0.335,0.749 0.748,0.749l6.535,-0c0.413,-0 0.748,-0.336 0.748,-0.749l0,-1.497Z"
                  style={{ fill: "none", stroke: "#000", strokeWidth: "0.7px" }}
                />
                <path
                  d="M25.448,13.368c0,-0.413 -0.335,-0.748 -0.748,-0.748l-6.535,0c-0.413,0 -0.748,0.335 -0.748,0.748l-0,1.497c-0,0.413 0.335,0.749 0.748,0.749l6.535,-0c0.413,-0 0.748,-0.336 0.748,-0.749l0,-1.497Z"
                  style={{ fill: "none", stroke: "#000", strokeWidth: "0.7px" }}
                />
              </svg>
              <span className="text-sm">
                {property.number_of_bedrooms} bedrooms
              </span>
            </div>
          )}

          {/* bathroom */}
          {property.number_of_bathrooms && (
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                }}
                height="30"
                width="30"
              >
                <path
                  d="M62 32a5.97 5.97 0 0 1-1.21 3.61A23.87 23.87 0 0 0 56 50a6 6 0 0 1-6 6H18a6 6 0 0 1-6-6A23.87 23.87 0 0 0 7.21 35.61 5.97 5.97 0 0 1 6 32Z"
                  style={{ fill: "#fff", stroke: "#000", strokeWidth: "2px" }}
                />
                <rect
                  height="4"
                  width="4"
                  x="44"
                  y="56"
                  style={{
                    fill: "#bdc3c7",
                    stroke: "#000",
                    strokeWidth: "2px",
                  }}
                />
                <rect
                  height="4"
                  width="4"
                  x="20"
                  y="56"
                  style={{
                    fill: "#bdc3c7",
                    stroke: "#000",
                    strokeWidth: "2px",
                  }}
                />
                <path
                  d="M47 12V8a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4V32"
                  style={{ fill: "none", stroke: "#000", strokeWidth: "2px" }}
                />
                <path
                  d="M43 16h8a4 4 0 0 0-4-4h0a4 4 0 0 0-4 4Z"
                  style={{
                    fill: "#bdc3c7",
                    stroke: "#000",
                    strokeWidth: "2px",
                  }}
                />
              </svg>
              <span className="text-sm">{property.number_of_bathrooms} bathrooms</span>
            </div>
          )}

          {/* toilet */}
          {property.number_of_toilets && (
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="30"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                }}
              >
                <rect fill="none" height="256" width="256" />
                <path
                  d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72"
                  style={{ fill: "none", stroke: "#000", strokeWidth: "16px" }}
                />
                <line
                  x1="96"
                  y1="64"
                  x2="112"
                  y2="64"
                  style={{ fill: "none", stroke: "#000", strokeWidth: "16px" }}
                />
                <path
                  d="M216,112a88,88,0,0,1-176,0Z"
                  style={{ fill: "none", stroke: "#000", strokeWidth: "16px" }}
                />
                <path
                  d="M93.6,193l-4.3,29.9a8,8,0,0,0,7.9,9.1h61.6a8,8,0,0,0,7.9-9.1L162.4,193"
                  style={{ fill: "none", stroke: "#000", strokeWidth: "16px" }}
                />
              </svg>
              <span className="text-sm">{property.number_of_toilets} toilets</span>
            </div>
          )}
        </div>
      </div>

      <Divider />

      <div className="mt-2">
        <p className="text-[#404b82] text-sm leading-6">
          <span className="font-semibold"> Description : </span> <br />{" "}
          {property.description}
        </p>
      </div>
    </div>
  );
};

export default PropertyInfoCard;
