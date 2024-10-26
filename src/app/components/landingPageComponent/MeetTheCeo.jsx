import { Divider } from "@mui/material";
import Image from "next/image";
import ceoImage from "@/app/images/ceo.jpg";
import FaqComponent from "../FaqComponent";
import { IconButton } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
const MeetTheCeo = () => {
  return (
    <>
      <div className="my-6 p-4 flex flex-col gap-2">
        <div>
          <Divider>
            <h1 className="my-3 text-2xl font-semibold text-center text-[#ff8433] flex items-center gap-2">
              Meet the Founder
            </h1>
          </Divider>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4">
            {" "}
            <Image
              src={ceoImage}
              alt="Founders image"
              height={300}
              width={500}
              style={{
                borderRadius: "0.5rem",
              }}
            />
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="flex flex-col gap-6 p-4">
              <div>
                <h1 className="text-xl font-semibold">MUHAMMED SULEIMAN</h1>
              </div>
              <div>
                <p className="text-justify text-sm">
                  Muhammed Sulaiman, the founder and CEO of Hamstrong Limited,
                  has built the business on the core values of trust,
                  transparency, and truthfulness. With a steadfast commitment to
                  delivering exceptional service and honest communication, he
                  has established Hamstrong Limited as a reliable and
                  customer-focused real estate platform. Sulaiman vision is to
                  create lasting relationships with clients, ensuring they have
                  a seamless and trustworthy experience when searching for their
                  dream property.
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <p className="text-sm">Connect with me on </p>
                  <IconButton>
                    <Facebook sx={{ color: "#ff8433" }} />
                  </IconButton>
                  <IconButton>
                    <Instagram sx={{ color: "#ff8433" }} />
                  </IconButton>
                  <IconButton>
                    <WhatsApp sx={{ color: "#ff8433" }} />
                  </IconButton>
                  <IconButton>
                    <XIcon sx={{ color: "#ff8433" }} />
                  </IconButton>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex flex-col gap-3">
                  <div>
                    <h1 className="font-semibold text-center text-[#ff8433] text-2xl">
                      FAQ
                    </h1>
                  </div>
                  <div>
                    <FaqComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetTheCeo;
