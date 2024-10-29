"use client";
import { Divider } from "@mui/material";
import ArrowDown from "../ArrowDown";
import SurfingCatalogue from "./SurfingCatalogue";
import GetStartedButton from "../buttons/GetStratedButton";
import MessageUs from "./MessageUs";
import GetInTouchButton from "../buttons/GetInTouchButton";
import ThumbsUp from "../ThumbsUp";
import { motion } from "framer-motion";
import { scrollVariants } from "@/app/models/animation";

const HowItWorks = () => {
  return (
    <div className="my-6 p-4 flex flex-col gap-2">
      <div>
        <Divider>
          <h1 className="my-3 text-2xl font-semibold text-center text-[#ff8433] flex items-center gap-2">
            How It Works
          </h1>
        </Divider>
      </div>
      <div className="w-full flex items-center justify-center">
        <ArrowDown />
      </div>
      <motion.div
        className="hero-section"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollVariants}
      >
        {/* explore component */}
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4">
            <SurfingCatalogue />
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="flex flex-col gap-2 p-4">
              <h1 className="text-xl">
                <span className="font-semibold text-[#ff8433] text-2xl">
                  Explore
                </span>{" "}
                Our Catalogue
              </h1>
              <p className="text-justify">
                Discover your dream property in our extensive catalog! Whether
                you are looking for affordable homes, luxury estates, shortlets,
                or lease options, we have something tailored to your needs.
                Explore a wide range of properties and find the perfect match,
                from cozy retreats to expansive residences. Dive into an endless
                selection and start your journey to finding the ideal space
                today.
              </p>
              <div>
                <GetStartedButton
                  text={"Explore"}
                  param={"all-properties"}
                  type={"sale"}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="hero-section"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollVariants}
      >
        {/* found a match */}
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4">
            <MessageUs />
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="flex flex-col gap-2  p-4">
              <h1 className="text-xl">
                Found a
                <span className="ml-2 font-semibold text-[#ff8433] text-2xl">
                  Match ?
                </span>{" "}
              </h1>
              <p className="text-justify">
                You can easily get in touch with us through the contact button
                on any listing that interests you. Rest assured, we will respond
                within 24 hours, or 48 hours at the latest. We are committed to
                maintaining excellent communication with both our existing and
                potential customers, and we are more than happy to address any
                inquiries you may have.
              </p>

              <div>
                <GetInTouchButton
                  message={
                    "Hello, I'm been redirected from hamstrong realty and am interested in your services!"
                  }
                  text={"Make Inquiry"}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="hero-section"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollVariants}
      >
        {/* Get a feedback */}
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4">
            <ThumbsUp />
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className=" flex flex-col gap-2 p-4">
              <h1 className="text-xl">
                Get
                <span className="ml-2 font-semibold text-[#ff8433] text-2xl">
                  Instant Feedback
                </span>{" "}
              </h1>
              <p className="text-justify">
                It&apos;s easy, isn&apos;t it? Start your journey towards
                finding your dream property with Hamstrong Limited today!
              </p>
              <div>
                <GetStartedButton
                  text={"Get Started"}
                  param={"all-properties"}
                  type={"sale"}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
