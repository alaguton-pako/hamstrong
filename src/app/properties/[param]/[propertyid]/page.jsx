"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Share } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import image1 from "@/app/images/heroImages/heroImage1.jpg";
import image2 from "@/app/images/heroImages/heroImage2.jpg";
import image3 from "@/app/images/heroImages/heroImage3.jpg";
import image4 from "@/app/images/heroImages/heroImage4.jpg";
import image5 from "@/app/images/heroImages/heroImage5.jpg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "@/app/components/ImageViewer";
import Image from "next/image";
import { Divider } from "@mui/material";
import { Email, LocationOnSharp, PhoneAndroid } from "@mui/icons-material";
import GetInTouchButton from "@/app/components/buttons/GetInTouchButton";
import SecurityIcon from "@mui/icons-material/Security";
import MosqueIcon from "@mui/icons-material/Mosque";
import ChurchIcon from "@mui/icons-material/Church";
import EmergencyIcon from "@mui/icons-material/Emergency";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PropertyInfoCard from "@/app/components/cards/PropertyInfoCard";

const Page = () => {
  const { param, propertyid } = useParams();
  const [open, setOpen] = useState(false);
  console.log(param);
  console.log(propertyid);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const href = {
    pathname: `/properties/${param}`,
    query: { type: "buy" },
  };
  return (
    <div>
      {" "}
      <NavBar />
      <Divider />
      <div className="max-w-[80%] mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400">
              <KeyboardArrowLeftIcon />
              <Link href={href}>
                <p className="hover:font-semibold">Back to search results</p>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
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
                <span>save to favourite</span>
              </div>
              <div className="flex items-center gap-2">
                <Share fontSize="small" sx={{ color: "gray" }} />
                <span className="hover:cursor-pointer">copy link to share</span>
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[#3d4578]">
              {decodeURIComponent(propertyid)}
            </p>
          </div>
          <div className="grid grid-cols-12 gap-3">
            <div className="relative col-span-9 rounded-md overflow-hidden">
              {/* Image */}
              <Image
                src={image4}
                alt="Description of image"
                height={500}
                width={500}
                className="w-full h-full rounded-sm"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>

              {/* View All Images Button */}
              <button
                className="absolute bottom-2 right-2 bg-white text-black px-4 py-2 text-sm font-semibold rounded shadow-md hover:bg-gray-200"
                onClick={() => setOpen(true)}
              >
                View photo
              </button>

              {/* Lightbox for viewing all images */}
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[image1, image2, image3, image4, image5]}
                render={{ slide: NextJsImage }}
              />
            </div>
            <div className="col-span-3">
              <div className="relative w-full h-0 pb-[56.25%] rounded-md">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Random YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

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
                        200,000,000
                      </h1>
                    </div>
                    <div className="flex items-start gap-1">
                      <LocationOnSharp
                        fontSize="small"
                        sx={{
                          color: "#3d4578",
                        }}
                      />
                      <p className="text-sm text-[#3d4578]">
                        12 Bangui Street, Abuja.
                      </p>
                    </div>
                    <div className="flex items-start gap-1">
                      <PhoneAndroid
                        fontSize="small"
                        sx={{
                          color: "#3d4578",
                        }}
                      />
                      <p className="text-sm text-[#3d4578]">08068699363.</p>
                    </div>
                    <div className="flex items-start gap-1">
                      <Email
                        fontSize="small"
                        sx={{
                          color: "#3d4578",
                        }}
                      />
                      <p className="text-sm text-[#3d4578]">
                        info@hamstrongrealty.com
                      </p>
                    </div>
                    <GetInTouchButton />
                  </div>
                </div>
              </div>

              <div className="mt-2 border border-gray-300 rounded-md p-4">
                <h1 className="w-full font-semibold mb-3 text-sm text-[#3d4578] text-center">
                  Key Features
                </h1>
                <div className="flex justify-start">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-1">
                      <MosqueIcon
                        fontSize="small"
                        sx={{
                          color: "#3d4578",
                        }}
                      />
                      <p className="text-sm text-[#3d4578]">Mosque Nearby.</p>
                    </div>
                    <div className="flex items-start gap-1">
                      <ChurchIcon
                        fontSize="small"
                        sx={{
                          color: "#3d4578",
                        }}
                      />
                      <p className="text-sm text-[#3d4578]">Church Nearby.</p>
                    </div>
                    <div className="flex items-start gap-1">
                      <SecurityIcon
                        fontSize="small"
                        sx={{
                          color: "#3d4578",
                        }}
                      />
                      <p className="text-sm text-[#3d4578]">security.</p>
                    </div>
                    <div className="flex items-start gap-1">
                      <EmergencyIcon
                        fontSize="small"
                        sx={{
                          color: "#3d4578",
                        }}
                      />
                      <p className="text-sm text-[#3d4578]">Hospital Nearby.</p>
                    </div>
                    <div className="flex items-start gap-1">
                      <FitnessCenterIcon
                        fontSize="small"
                        sx={{
                          color: "#3d4578",
                        }}
                      />
                      <p className="text-sm text-[#3d4578]">Gym Nearby.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 grid grid-cols-12">
            <div className="col-span-9">
              <PropertyInfoCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
