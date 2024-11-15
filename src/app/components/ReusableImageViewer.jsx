"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "@/app/components/ImageViewer";
import Image from "next/image";
import { Email, LocationOnSharp, PhoneAndroid } from "@mui/icons-material";
import GetInTouchButton from "./buttons/GetInTouchButton";

const ReusableImageViewer = ({ property }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        <div className="relative col-span-12 lg:col-span-8 xl:col-span-9 rounded-md overflow-hidden h-96">
          {/* Image */}
          <Image
            src={property.image}
            alt="Description of image"
            height={400}
            width={500}
            className="rounded-sm w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>
          {/* View All Images Button */}
          <button
            className="absolute bottom-2 right-2 bg-white text-black px-4 py-2 text-sm font-semibold rounded shadow-md hover:bg-gray-200"
            onClick={() => setOpen(true)}
          >
            View photos
          </button>
          {/* Lightbox for viewing all images */}
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={property.imagesArray}
            render={{ slide: NextJsImage }}
          />
        </div>

        <div className="col-span-12 lg:col-span-4 xl:col-span-3 ">
          {property.videoLink && (
            <div className="relative w-full h-0 pb-[56.25%] rounded-md">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-md"
                src={`https://www.youtube.com/embed/${
                  property.videoLink.split("=")[1]
                }`}
                title="Random YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <div className="mt-2 border border-gray-300 rounded-md p-4">
            <h1 className="w-full font-semibold mb-3 text-sm text-[#3d4578] text-center">
              Property Info
            </h1>
            <div className="flex justify-center">
              <div className="flex flex-col gap-3">
                <div>
                  <h1 className="text-lg font-bold text-[#3d4578] flex items-center">
                    <svg
                      className="icon icon-tabler icon-tabler-currency-naira"
                      fill="none"
                      height="30"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="30"
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
                <div className="flex items-start gap-1">
                  <LocationOnSharp fontSize="small" sx={{ color: "#3d4578" }} />
                  <p className="text-sm text-[#3d4578]">{property.location}</p>
                </div>
                <div className="flex items-start gap-1">
                  <PhoneAndroid fontSize="small" sx={{ color: "#3d4578" }} />
                  <p className="text-sm text-[#3d4578]">07035648652.</p>
                </div>
                <div className="flex items-start gap-1">
                  <Email fontSize="small" sx={{ color: "#3d4578" }} />
                  <p className="text-sm text-[#3d4578]">
                    hamstrongrealtyltd@gmail.com
                  </p>
                </div>
                <GetInTouchButton
                  text={"Buy property"}
                  message={`Hi there am intrested in the ${property.title} property.`}
                  imageUrl={`https://hamstrongrealty.netlify.app/properties/all-properties/${property.uuid}`}
                />
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </>
  );
};

export default ReusableImageViewer;
