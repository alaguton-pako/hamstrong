"use client";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "@/assets/womanSearching.json";

const SurfingCatalogue = () => {
  return (
    <div className="w-full h-full">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: 400, height: 400 }}
      />
    </div>
  );
};

export default SurfingCatalogue;