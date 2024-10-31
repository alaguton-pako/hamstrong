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
    { name: "Lands", path: "land", type: "sale" },
    { name: "Houses", path: "house", type: "sale" },
    { name: "Shortlets", path: "house", type: "sale" },
    { name: "Commercial property", path: "commercial-property", type: "sale" },
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
            <div className="col-span-12 md:col-span-3">
              <h1 className="mt-4 md:font-semibold md:mt-0 mb-3">
                Quick Links
              </h1>
              <ul className="flex flex-col gap-2">
                {menu.map((property, index) => (
                  <Link
                    key={index}
                    href={{
                      pathname: `/properties/${property.path}`,
                      query: { type: property.type },
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
            <div className="col-span-12 md:col-span-7">
              <h1 className="font-semibold mb-3">Contacts</h1>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-1">
                  <LocationOnSharp />
                  <p>VON road lugbe Abuja, Nigeria.</p>
                </div>
                <div className="flex items-start gap-1">
                  <PhoneAndroid />
                  <p>07035648652</p>
                </div>
                <div className="flex items-start gap-1">
                  <Email />
                  <p>info@hamstrongrealty.com</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-2">
              <h1 className="font-semibold mb-3">Social Links</h1>
              <div className="flex items-center gap-2">
                <>
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/share/qZAySCgCAH2vEgEJ/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/hamstrong_realty_limited_/profilecard/?igsh=dmpsOHNyYXhvaGFu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/2347035648652?text=Hello,%20I'm%20been%20redirected%20from%20hamstrong%20realty%20and%20am%20interested%20in%20your%20services!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  </a>
                </>
                {/* <IconButton>
                  <XIcon
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: "#ff8433",
                      },
                    }}
                  />
                </IconButton> */}
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
