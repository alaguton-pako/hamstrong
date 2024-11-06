"use client";
import { CircularProgress } from "@mui/material";

const HomeLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen fixed top-0 left-0 w-full">
      <div className="flex flex-col items-center md:flex-row md:gap-2">
        <h2 className="text-2xl md:text-4xl text-center text-[#ff8433] px-4 md:px-0">
          HAMSTRONG REALTY LIMITED
        </h2>
        <CircularProgress color="success" size={24} className="mt-2 md:mt-0" />
      </div>
    </div>
  );
};

export default HomeLoader;
