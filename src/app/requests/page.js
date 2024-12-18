"use client";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { getPosts } from "../models/getPosts";
import { useState, useEffect } from "react";
import NairaIcon from "../components/NairaIcon";
import GetInTouchButton from "../components/buttons/GetInTouchButton";
import { Divider } from "@mui/material";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await getPosts();
      setPosts(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const payLoad = posts.filter((post) => post.isApproved);
  return (
    <>
      <NavBar />
      <Divider />
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col gap-3 mt-11">
          <div className="flex items-center justify-between">
            <h1 className="text-xl my-3 text-[#33af67]">Properties Requests</h1>
          </div>
          <div className="grid grid-cols-12 gap-3 my-6">
            {isLoading ? ( // Step 2: Conditionally render loader
              <p className="text-center col-span-12">Loading...</p>
            ) : payLoad.length === 0 ? (
              <p className="text-center col-span-12 text-red-500 text-xs">
                sorry, there is no request to show at the moment
              </p>
            ) : (
              payLoad.map((post) => (
                <div
                  className="col-span-12 text-sm p-3 h-auto md:col-span-2 lg:col-span-2 xl:col-span-3 border border-gray-200 overflow-y-auto"
                  key={post.id}
                >
                  <div className="flex flex-col gap-1 mb-2">
                    <span className="font-semibold text-[#33af67]">
                      Property Type
                    </span>
                    <h2 className="">{post.type}</h2>
                  </div>
                  <div className="flex flex-col gap-1 mb-2">
                    <span className="font-semibold text-[#33af67]">
                      Category
                    </span>
                    <h2 className="">{post.category}</h2>
                  </div>

                  <div className="flex flex-col gap-1 mb-2">
                    <span className="font-semibold text-[#33af67]">
                      Bedrooms
                    </span>
                    <h2 className="">{post.bedrooms}</h2>
                  </div>
                  <div className="flex flex-col gap-1 mb-2">
                    <span className="font-semibold text-[#33af67]">
                      Location
                    </span>
                    <h2 className="">{post.state}</h2>
                  </div>
                  <div className="flex flex-col gap-1 mb-2">
                    <span className="font-semibold text-[#33af67]">Budget</span>
                    <h2 className="">
                      <NairaIcon />
                      {post.budget}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1 mb-2">
                    <span className="font-semibold text-[#33af67]">
                      Requester Type
                    </span>
                    <h2 className="">{post.typeofindividual}</h2>
                  </div>
                  <div className="flex flex-col gap-1 mb-2">
                    <span className="font-semibold text-[#33af67]">
                      Comment
                    </span>
                    <h2 className="">{post.comment}</h2>
                  </div>
                  <GetInTouchButton
                    text={"Get in touch"}
                    message={`Hi there, i am intrested in the ${post.category} property uploaded for  request by  ${post.name}`}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
