"use client";
import { useState, useEffect } from "react";
import { Divider } from "@mui/material";
import Link from "next/link";
import AddPostModal from "./AddPostModal";

const NavBarMenu = () => {
  const [showBuyMenu, setShowBuyMenu] = useState(false);
  const [showRentMenu, setShowRentMenu] = useState(false);
  const [showShortletMenu, setShowShortletMenu] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [isHoveringBuy, setIsHoveringBuy] = useState(false);
  const [isHoveringRent, setIsHoveringRent] = useState(false);
  const [isHoveringShortlet, setIsHoveringShortlet] = useState(false);
  const [isHoveringRequest, setIsHoveringRequest] = useState(false);

  // Hover handlers for "Buy" menu
  const handleMouseEnterBuy = () => setIsHoveringBuy(true);
  const handleMouseLeaveBuy = () => setIsHoveringBuy(false);

  // Hover handlers for "Rent" menu
  const handleMouseEnterRent = () => setIsHoveringRent(true);
  const handleMouseLeaveRent = () => setIsHoveringRent(false);

  // Hover handlers for "Shortlet" menu
  const handleMouseEnterShortlet = () => setIsHoveringShortlet(true);
  const handleMouseLeaveShortlet = () => setIsHoveringShortlet(false);

  // Hover handlers for "Shortlet" menu
  const handleMouseEnterRequest = () => setIsHoveringRequest(true);
  const handleMouseLeaveRequest = () => setIsHoveringRequest(false);

  // Effect to manage the "Buy" submenu visibility
  useEffect(() => {
    let timer;
    if (isHoveringBuy) {
      setShowBuyMenu(true);
    } else {
      timer = setTimeout(() => setShowBuyMenu(false), 150);
    }
    return () => clearTimeout(timer);
  }, [isHoveringBuy]);

  // Effect to manage the "Rent" submenu visibility
  useEffect(() => {
    let timer;
    if (isHoveringRent) {
      setShowRentMenu(true);
    } else {
      timer = setTimeout(() => setShowRentMenu(false), 150);
    }
    return () => clearTimeout(timer);
  }, [isHoveringRent]);

  // Effect to manage the "Shortlet" submenu visibility
  useEffect(() => {
    let timer;
    if (isHoveringShortlet) {
      setShowShortletMenu(true);
    } else {
      timer = setTimeout(() => setShowShortletMenu(false), 150);
    }
    return () => clearTimeout(timer);
  }, [isHoveringShortlet]);

  // Effect to manage the "Request" submenu visibility
  useEffect(() => {
    let timer;
    if (isHoveringRequest) {
      setShowRequest(true);
    } else {
      timer = setTimeout(() => setShowRequest(false), 150);
    }
    return () => clearTimeout(timer);
  }, [isHoveringRequest]);

  const properties = [
    // { name: "Flats & Apartments for sale", path: "flat-apartment" },
    { name: "Houses for sale", path: "house" },
    { name: "Lands for sale", path: "land" },
    { name: "Commercial property for sale", path: "commercial-property" },
  ];

  const propertiesForRent = [
    // { name: "Flats & Apartments for rent", path: "flat-apartment" },
    { name: "Houses for rent", path: "house" },
    { name: "Lands for rent", path: "land" },
    { name: "Commercial property for rent", path: "commercial-property" },
  ];

  return (
    <div className="flex items-center space-x-8">
      {/* "Buy" Menu */}
      <div
        className="relative z-20"
        onMouseEnter={handleMouseEnterBuy}
        onMouseLeave={handleMouseLeaveBuy}
      >
        <ul className="cursor-pointer">
          <li className="font-semibold p-0 bg-white text-black hover:hover:text-[#ff8433]">
            Buy
          </li>
        </ul>
        {showBuyMenu && (
          <div className="absolute top-full mt-2 w-[20rem]">
            <ul className="p-2 bg-white border border-[#ffccaa] rounded-md">
              {properties.map((property, index) => (
                <Link
                  key={index}
                  href={{
                    pathname: `/properties/${property.path}`,
                    query: { type: "sale" },
                  }}
                >
                  <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                    {property.name}
                  </li>
                </Link>
              ))}
              <Divider />
              <Link
                href={{
                  pathname: "/properties/all-properties",
                  query: { type: "sale" },
                }}
              >
                <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                  All property for sale
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>

      {/* "Rent" Menu */}
      <div
        className="relative z-20"
        onMouseEnter={handleMouseEnterRent}
        onMouseLeave={handleMouseLeaveRent}
      >
        <ul className="cursor-pointer">
          <li className="font-semibold p-0 bg-white text-black hover:hover:text-[#ff8433]">
            Rent
          </li>
        </ul>
        {showRentMenu && (
          <div className="absolute top-full mt-2 w-[20rem]">
            <ul className="p-2 bg-white border border-[#ffccaa] rounded-md">
              {propertiesForRent.map((property, index) => (
                <Link
                  key={index}
                  href={{
                    pathname: `/properties/${property.path}`,
                    query: { type: "rent" },
                  }}
                >
                  <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                    {property.name}
                  </li>
                </Link>
              ))}
              <Divider />
              <Link
                href={{
                  pathname: "/properties/all-properties",
                  query: { type: "rent" },
                }}
              >
                <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                  All property for rent
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>

      {/* "Shortlet" Menu */}
      <div
        className="relative z-20"
        onMouseEnter={handleMouseEnterShortlet}
        onMouseLeave={handleMouseLeaveShortlet}
      >
        <ul className="cursor-pointer">
          <li className="font-semibold p-0 bg-white text-black hover:hover:text-[#e99767]">
            Shortlet
          </li>
        </ul>
        {showShortletMenu && (
          <div className="absolute top-full mt-2 w-[20rem]">
            <ul className="p-2 bg-white border border-[#ffccaa] rounded-md">
              <Link
                href={{
                  pathname: `/properties/shortlet-abuja`,
                  query: { type: "shortlet" },
                }}
              >
                <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                  Shortlet in Abuja
                </li>
              </Link>
              <Link
                href={{
                  pathname: `/properties/shortlet-lagos`,
                  query: { type: "shortlet" },
                }}
              >
                <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                  Shortlet in Lagos
                </li>
              </Link>
              <Link
                href={{
                  pathname: `/properties/shortlet-ibadan`,
                  query: { type: "shortlet" },
                }}
              >
                <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                  Shortlet in Ibadan
                </li>
              </Link>
              <Divider />
              <Link
                href={{
                  pathname: `/properties/shortlet-all`,
                  query: { type: "shortlet" },
                }}
              >
                <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                  All property for Shortlet
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>

      {/* View and Request For Property */}
      <div
        className="relative z-20"
        onMouseEnter={handleMouseEnterRequest}
        onMouseLeave={handleMouseLeaveRequest}
      >
        <ul className="cursor-pointer">
          <li className="font-semibold p-0 bg-white text-black hover:hover:text-[#e99767]">
            Request
          </li>
        </ul>
        {showRequest && (
          <div className="absolute top-full mt-2 w-[10rem]">
            <ul className="p-2 bg-white border border-[#ffccaa] rounded-md">
              <AddPostModal />
              <Divider />
              <Link
                href={{
                  pathname: `/requests`,
                }}
              >
                <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                  View Requests
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBarMenu;
