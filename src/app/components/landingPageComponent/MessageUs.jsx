"use client";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "@/assets/manThumbsUp.json"

const MessageUs = () => {
  return (
    <div className="w-full h-full">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: 300, height: 400 }}
      />
    </div>
  );
};

export default MessageUs;