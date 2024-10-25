"use client";
import { useState, useEffect } from "react";
import { Divider } from "@mui/material";
import Link from "next/link";

const NavBarMenu = () => {
  const [showBuyMenu, setShowBuyMenu] = useState(false);
  const [showRentMenu, setShowRentMenu] = useState(false);
  const [showShortletMenu, setShowShortletMenu] = useState(false);
  const [isHoveringBuy, setIsHoveringBuy] = useState(false);
  const [isHoveringRent, setIsHoveringRent] = useState(false);
  const [isHoveringShortlet, setIsHoveringShortlet] = useState(false);

  // Hover handlers for "Buy" menu
  const handleMouseEnterBuy = () => setIsHoveringBuy(true);
  const handleMouseLeaveBuy = () => setIsHoveringBuy(false);

  // Hover handlers for "Rent" menu
  const handleMouseEnterRent = () => setIsHoveringRent(true);
  const handleMouseLeaveRent = () => setIsHoveringRent(false);

  // Hover handlers for "Shortlet" menu
  const handleMouseEnterShortlet = () => setIsHoveringShortlet(true);
  const handleMouseLeaveShortlet = () => setIsHoveringShortlet(false);

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
                    query: { type: "buy" },
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
                  query: { type: "buy" },
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
    </div>
  );
};

export default NavBarMenu;
