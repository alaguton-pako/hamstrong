"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import image1 from "@/app/images/heroImages/heroImage1.jpg";
import image2 from "@/app/images/heroImages/heroImage2.jpg";
import image3 from "@/app/images/heroImages/heroImage3.jpg";
import image4 from "@/app/images/heroImages/heroImage4.jpg";
import image5 from "@/app/images/heroImages/heroImage5.jpg";
import GetStartedButton from "../buttons/GetStratedButton";

const images = [image1, image2, image3, image4, image5];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-[#ff8433]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Hero Image ${index + 1}`}
          fill
          style={{
            objectFit: "cover",
            transition: "opacity 3s ease-in-out",
            opacity: index === currentImageIndex ? 1 : 0, // Ensure smooth transition
          }}
          priority={index === 0} // Add priority to the first image
          className={`absolute top-0 left-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-50" />{" "}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl font-bold">
          Welcome to Hamstrong Realty Limited, Where Your Home Meets Passion
        </h1>
        <p className="mt-2 text-lg">
          Discover our extensive range of properties and find your perfect match
          with us!
        </p>
        <GetStartedButton text={"Explore Properties"} param={"all"} />
      </div>
    </div>
  );
};

export default HeroSection;