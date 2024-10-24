"use client";
import { CircularProgress } from "@mui/material";

const HomeLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen fixed top-0 left-0 w-full">
      <div className="flex items-center gap-2">
        <h2 className="text-4xl text-[#ff8433]">HAMSTRONG REALTY LIMITED</h2>
        <CircularProgress color="success" />
      </div>
    </div>
  );
};

export default HomeLoader;
