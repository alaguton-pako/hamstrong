"use client";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { getPosts } from "../models/getPosts";
import { useState, useEffect } from "react";
import NairaIcon from "../components/NairaIcon";
import GetInTouchButton from "../components/buttons/GetInTouchButton";
import { Button, Divider } from "@mui/material";
import { formatDate } from "../models/Helper";
import { updatePost } from "../models/updatePost";
import { toast } from "react-toastify";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await getPosts();
      setPosts(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  async function handleUpdate(id) {
    setIsSubmitting(true); // Start submission process
    setErrorMessage(""); // Clear previous errors

    try {
      const updatedData = {
        isApproved: true,
      };

      const response = await updatePost(id, updatedData);

      if (response.success) {
        // Assuming `response.success` indicates success
        toast.success(response.message); // Success toast
      } else {
        setErrorMessage(response.message || "Update failed"); // Handle API error messages
        toast.error(response.message || "Update failed");
      }
    } catch (error) {
      console.error("Update error:", error); // Log for debugging
      setErrorMessage("An error occurred while updating. Please try again.");
      toast.error("An error occurred while updating. Please try again.");
    } finally {
      setIsSubmitting(false); // Stop submission process after completion
    }
  }

  const payLoad = posts.filter((post) => !post.isApproved);

  return (
    <>
      <NavBar />
      <Divider />
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col gap-3 mt-11">
          <div className="flex items-center justify-between">
            <h1 className="text-xl my-3 text-[#33af67]">Properties Requests</h1>
            {/* <span>search and filter</span> */}
          </div>
          <div className="grid grid-cols-12 gap-3 my-6">
            {isLoading ? ( // Step 2: Conditionally render loader
              <p className="text-center col-span-12">Loading...</p>
            ) : payLoad.length === 0 ? (
              <p className="text-center col-span-12 text-red-500 text-xs">
                sorry, there is no un-approved request to show at the moment
              </p>
            ) : (
              payLoad.map((post) => (
                <div
                  className="col-span-12 text-sm p-3 h-auto md:col-span-2 lg:col-span-2 xl:col-span-3 border border-gray-200 overflow-y-auto"
                  key={post.id}
                >
                  <div className="flex items-center justify-between gap-1">
                    <div className="flex flex-col gap-1 mb-2">
                      <span className="font-semibold text-[#33af67]">Name</span>
                      <h2 className="">{post.name}</h2>
                    </div>
                    <span className="h-12 w-1 bg-slate-300"></span>
                    <div className="flex flex-col gap-1 mb-2">
                      <span className="font-semibold text-[#33af67]">
                        Number
                      </span>
                      <h2 className="">{post.phoneNumber}</h2>
                    </div>
                  </div>

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
                  <div className="flex flex-col gap-1 mb-2">
                    <span className="font-semibold text-[#33af67]">
                      Date of Request
                    </span>
                    <h2 className="">{formatDate(post.createdAt)}</h2>
                  </div>
                  <div className="flex items-center justify-between flex-wrap">
                    <GetInTouchButton
                      text={"Get in touch"}
                      message={`Hi there from hamstrong realty limited, i have an update for you regarding the property you made request on ${post.type}-${post.category} at ${post.state}`}
                      phoneNumber={post.phoneNumber}
                      imageUrl={"hamstrongrealty.netlify.app"}
                    />
                    <Button
                      variant="contained"
                      sx={{ textTransform: "initial" }}
                      onClick={() => handleUpdate(post.id)}
                    >
                      Approve request
                    </Button>
                  </div>
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
