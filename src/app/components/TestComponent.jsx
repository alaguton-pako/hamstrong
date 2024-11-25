"use client";
import Link from "next/link";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import WhatsAppShareButton from "@/app/components/buttons/WhatAppShareButton";
import FacebookShareButton from "@/app/components/buttons/FaceBookShareButton";
import CopyToClipboardButton from "@/app/components/buttons/CopyToClipBoard";
import GetInTouchButton from "@/app/components/buttons/GetInTouchButton";
import TwitterShareButton from "@/app/components/buttons/TwitterShareButton";
import PropertyInfoCard from "@/app/components/cards/PropertyInfoCard";
import { useParams } from "next/navigation";
import FavouriteButton from "@/app/components/buttons/FavouriteButton";
import { Divider, IconButton } from "@mui/material";
import { propertyData } from "@/app/models/newArrivals";
import ReusableImageViewer from "./ReusableImageViewer";

const TestComponent = () => {
  const { param, propertyid } = useParams();
  const property = propertyData.allProperties.find(
    (item) => item.uuid === propertyid
  );

  const href = {
    pathname: `/properties/${param}`,
    query: { type: "sale" },
  };
  return (
    <>
      <div className="max-w-[80%] mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center flex-wrap gap-2 my-2">
            <div className="flex items-center gap-2 text-gray-400">
              <Link href={href}>
                <IconButton>
                  <KeyboardArrowLeftIcon />
                </IconButton>
              </Link>

              <Link href={href}>
                <p className="hover:font-semibold">Back to search results</p>
              </Link>
            </div>
            <div className="block md:flex items-center gap-2 flex-wrap">
              <div className="flex items-center">
                <FavouriteButton
                  uuid={propertyid}
                  title={property.title}
                  location={property.location}
                />
                <span>save to favourite</span>
              </div>
              <Divider orientation="vertical" />
              <span className="text-xs text-gray-400 font-semibold">
                share :{" "}
              </span>
              <FacebookShareButton
                title={property.title}
                description={property.description}
                url={`https://hamstrongrealty.netlify.app/properties/all-properties${property.uuid}`}
              />
              <TwitterShareButton
                title={property.title}
                description={property.description}
                url={`https://hamstrongrealty.netlify.app/properties/all-properties${property.uuid}`}
              />
              <WhatsAppShareButton
                title={property.title}
                description={property.description}
                url={`https://hamstrongrealty.netlify.app/properties/all-properties${property.uuid}`}
              />
              <CopyToClipboardButton uuid={propertyid} />
            </div>
          </div>

          <div>
            <p className="font-semibold text-[#3d4578]">{property.title}</p>
          </div>

          <ReusableImageViewer property={property} />

          <div className="my-2 grid grid-cols-12">
            <div className="col-span-12 md:col-span-9">
              <PropertyInfoCard property={property} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestComponent;
