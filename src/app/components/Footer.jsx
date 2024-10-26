import Image from "next/image";
import logo from "@/app/images/logo/hamstrongLogo2.jpeg";
import {
  Email,
  Facebook,
  Instagram,
  LocationOnSharp,
  PhoneAndroid,
  WhatsApp,
} from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import { IconButton } from "@mui/material";
import Link from "next/link";
const Footer = () => {
  const menu = [
    { name: "Lands", path: "land", type: "buy" },
    { name: "Duplex", path: "house", type: "buy" },
    { name: "Semi Detached", path: "house", type: "buy" },
    { name: "Terrace Bungalow", path: "house", type: "buy" },
    { name: "Terrace Duplex", path: "house", type: "buy" },
  ];
  return (
    <>
      <div className="grid grid-cols-12 bg-[#33af67] text-[#fff] text-sm p-4">
        <div className="col-span-12 md:col-span-5">
          <div className="flex items-start gap-3">
            <div>
              <Image alt="logo" src={logo} height={70} width={70} />
            </div>
            <div>
              <div className="flex flex-col  gap-1">
                <p className="hover:text-[#ff8433] ">Privacy & Policy</p>
                <p className="hover:text-[#ff8433] ">Terms and Conditions</p>
                <p className="hover:text-[#ff8433] ">Powered by Luxury Build</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p>Hamstrong Realty Limited is registered under the Nigeria CAC</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-4">
              <h1 className="font-semibold mb-3">Quick Links</h1>
              <ul className="flex flex-col gap-2">
                {menu.map((property, index) => (
                  <Link
                    key={index}
                    href={{
                      pathname: `/properties/${property.path}`,
                      query: { type: "buy" },
                    }}
                  >
                    <li className="hover:text-[#ff8433] cursor-pointer">
                      {property.name}
                    </li>
                  </Link>
                ))}
                <Link
                  href={{
                    pathname: `/properties/shortlet-all`,
                    query: { type: "shortlet" },
                  }}
                >
                  <li className="hover:text-[#ff8433] cursor-pointer">
                    Shortlet
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-4">
              <h1 className="font-semibold mb-3">Contacts</h1>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-1">
                  <LocationOnSharp />
                  <p>12 Bangui Street, Abuja.</p>
                </div>
                <div className="flex items-start gap-1">
                  <PhoneAndroid />
                  <p>08068699363.</p>
                </div>
                <div className="flex items-start gap-1">
                  <Email />
                  <p>info@hamstrongrealty.com</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <h1 className="font-semibold mb-3">Social Links</h1>
              <div className="flex items-center gap-2">
                <IconButton>
                  <Facebook
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: "#ff8433",
                      },
                    }}
                  />
                </IconButton>
                <IconButton>
                  <Instagram
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: "#ff8433",
                      },
                    }}
                  />
                </IconButton>
                <IconButton>
                  <WhatsApp
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: "#ff8433",
                      },
                    }}
                  />
                </IconButton>
                <IconButton>
                  <XIcon
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: "#ff8433",
                      },
                    }}
                  />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <p
            className="text-xs flex items-center justify-center mt-5
          "
          >
            © 2024 All Rights Reserved Hamstrong Realty Limited.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
