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
import { IconButton } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  const menu = [
    { name: "Lands", path: "land", type: "sale" },
    { name: "Houses", path: "house", type: "sale" },
    { name: "Commercial property", path: "commercial-property", type: "sale" },
  ];
  return (
    <>
      <div className="grid grid-cols-12 bg-[#33af67] text-[#fff] text-sm p-4">
        <div className="col-span-12 md:col-span-5">
          <div className="flex items-start gap-3">
            <div>
              <Image alt="logo" src={logo} height={50} width={50} />
            </div>
            <div>
              <div className="flex flex-col  gap-1">
                <p className="hover:text-[#ff8433] text-xs lg:text-md">
                  <a
                    href="/hamstrongPrivacyPolicy.pdf"
                    download="Hamstrong_Privacy_Policy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy & Policy
                  </a>
                </p>
                <p className="hover:text-[#ff8433] text-xs lg:text-md">
                  <a
                    href="/hamstrongTermsandConditions.pdf"
                    download="Hamstrong_Terms_and_Conditions.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms and Conditions
                  </a>
                </p>
                <p className="hover:text-[#ff8433] text-xs lg:text-md">
                  <a
                    href="https://adenigbaahmed.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Powered by Luxury Build
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p
              className="w-full text-xs mb-3 lg:text-md lg:mb-0 md:w-[8
            0%]"
            >
              Hamstrong Realty Limited is registered under the Nigeria CAC
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-3">
              <h1 className="mb-1 font-semibold md:mb-3">Quick Links</h1>
              <ul className="flex flex-col gap-2">
                {menu.map((property, index) => (
                  <Link
                    key={index}
                    href={{
                      pathname: `/properties/${property.path}`,
                      query: { type: property.type },
                    }}
                  >
                    <li className="hover:text-[#ff8433] cursor-pointer text-xs lg:text-md">
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
                  <li className="hover:text-[#ff8433] cursor-pointer text-xs lg:text-md">
                    Shortlet
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-7">
              <h1 className="mb-1 font-semibold md:mb-3">Contacts</h1>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-1">
                  <LocationOnSharp fontSize="small" />
                  <p className="text-xs lg:text-md">
                    Suite 1A cowries court VON road lugbe Abuja, Nigeria.
                  </p>
                </div>
                <div className="flex items-start gap-1">
                  <PhoneAndroid fontSize="small" />
                  <p className="text-xs lg:text-md">07035648652</p>
                  <p className="text-xs lg:text-md">09073187331</p>
                  <p className="text-xs lg:text-md">08068699363</p>
                </div>
                <div className="flex items-start gap-1">
                  <Email fontSize="small" />
                  <p className="text-xs lg:text-md">hamstrong0245@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-2">
              <h1 className="mb-1 font-semibold md:mb-3">Social Links</h1>
              <div className="flex items-center flex-wrap gap-2">
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
