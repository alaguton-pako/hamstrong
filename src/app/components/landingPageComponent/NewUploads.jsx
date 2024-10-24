"use client";
import ShowCard from "@/app/components/cards/ShowCard";
import { propertyData } from "@/app/models/newArrivals";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import Divider from "@mui/material/Divider";
import GetStartedButton from "../buttons/GetStratedButton";

const NewUploads = () => {
  return (
    <div className="my-6 p-4 flex flex-col gap-2">
      <Divider>
        <h1 className="my-6 text-2xl font-semibold text-center text-[#ff8433] flex items-center gap-2">
          Fresh Arrivals
          <NewReleasesIcon sx={{ fontSize: "3rem", color: "#ff8433" }} />
        </h1>
      </Divider>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {propertyData.newArrivals.map((item, index) => (
          <ShowCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            location={item.location}
            number_of_bedrooms={item.number_of_bedrooms}
            number_of_bathrooms={item.number_of_bathrooms}
            type={item.type}
            price={item.price}
            image_count={item.image_count}
            video={item.video}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <GetStartedButton text={"View More Properties"} param={"all-properties"} />
      </div>
    </div>
  );
};

export default NewUploads;