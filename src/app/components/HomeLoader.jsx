"use client";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import animationData from "../../assets/fes.json";

const HomeLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen fixed top-0 left-0 w-full">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: 200, height: 200, color:'#ff8433' }}
      />
      <h2 className="text-4xl text-[#ff8433]">HAMSTRONG REALTY LIMITED</h2>
    </div>
  );
};

export default HomeLoader;