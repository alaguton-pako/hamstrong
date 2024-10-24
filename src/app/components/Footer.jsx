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
const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-12 bg-[#33af67] text-[#fff] text-sm p-4">
        <div className="col-span-6">
          <div className="flex items-start gap-3">
            <div>
              <Image alt="logo" src={logo} height={70} width={70}/>
            </div>
            <div>
              <p>
                Hamstrong Realty Limited is registered under the Nigeria CAC
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 my-3">
            <p>© 2024 Hamstrong Realty Limited</p>
            <p>Powered by Lux Build</p>
            <p>Privacy & Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
        <div className="col-span-6">
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <h1 className="font-semibold mb-3">Quick Links</h1>
              <ul className="flex flex-col gap-2">
                <li className="hover:text-[#ff8433] cursor-pointer">Lands</li>
                <li className="hover:text-[#ff8433] cursor-pointer">Shortlets</li>
                <li className="hover:text-[#ff8433] cursor-pointer">Duplex</li>
                <li className="hover:text-[#ff8433] cursor-pointer">Semi Detached</li>
                <li className="hover:text-[#ff8433] cursor-pointer">Terrace Bungalow</li>
                <li className="hover:text-[#ff8433] cursor-pointer">Terrace Duplex</li>
              </ul>
            </div>
            <div className="col-span-4">
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
            <div className="col-span-4">
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
      </div>
    </>
  );
};

export default Footer;