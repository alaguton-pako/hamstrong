"use client";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "@/assets/arrowDown.json"

const ArrowDown = () => {
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};

export default ArrowDown;