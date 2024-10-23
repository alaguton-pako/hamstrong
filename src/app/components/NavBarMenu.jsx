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

  const href = {
    pathname: `/properties/flat-apartment`,
    query: { type: "buy" },
  };

  const href2 = {
    pathname: `/properties/flat-apartment`,
    query: { type: "rent" },
  };

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
              <Link href={href}>
                <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                  Flats & Apartments for sale
                </li>
              </Link>
              <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                Houses for sale
              </li>
              <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                Lands for sale
              </li>
              <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                Commercial property for sale
              </li>
              <Divider />
              <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                All property for sale
              </li>
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
              <Link href={href2}>
                <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                  Flats & Apartments for rent
                </li>
              </Link>
              <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                Houses for rent
              </li>
              <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                Lands for rent
              </li>
              <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                Commercial property for rent
              </li>
              <Divider />
              <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                All property for rent
              </li>
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
              <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                Shortlet in Abuja
              </li>
              <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                Shortlet in Lagos
              </li>
              <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                Shortlet in Ibadan
              </li>
              <Divider />
              <li className="py-2 px-4 hover:bg-[#ff9a5e] hover:text-white hover:rounded-md cursor-pointer transition duration-200">
                All property for Shortlet
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBarMenu;