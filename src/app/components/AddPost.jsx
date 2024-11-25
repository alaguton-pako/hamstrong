"use client";
import { useState } from "react";
import { addPost } from "../models/addPosts";
import { toast } from "react-toastify";

const statesInNigeria = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "Federal Capital Territory",
];

export default function AddPost({ setOpen }) {
  const [isApproved, setIsApproved] = useState(false);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [budget, setBudgets] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [typeofindividual, setTypeOfIndividual] = useState("");
  const [state, setState] = useState("");
  const [tooltip, setTooltip] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Step 2: Set isSubmitting to true when submission starts
    try {
      // Call the addPost function and await its result
      const response = await addPost(
        bedrooms,
        comment,
        budget,
        email,
        phoneNumber,
        category,
        type,
        typeofindividual,
        state,
        name,
        isApproved
      );
      if (response.success) {
        // Reset form fields after successful submission
        setCategory("");
        setType("");
        setComment("");
        setBedrooms("");
        setEmail("");
        setPhoneNumber("");
        setBudgets("");
        setState("");
        setTypeOfIndividual("");
        // Display success message
        toast.success(
          "Request submitted successfully! Your request will be uploaded after review."
        );
        // Close modal or perform other success actions
        setOpen(false);
      } else {
        // Display error message if submission failed
        toast.error(response.message); // Show toast for error
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Submission error:", error);
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mb-10 relative"
      >
        <h1 className="text-center mb-6 p-2 bg-[#33af67] text-white font-semibold rounded-md">
          Kindly Fill in the Information Below
        </h1>
        <div className="flex flex-col gap-4">
          {/* Category Dropdown */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="For Rent">For Rent</option>
            <option value="For Sale">For Sale</option>
            <option value="For Shortlet">For Shortlet</option>
          </select>

          {/* Type Dropdown */}
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
          >
            <option value="" disabled>
              Select Type
            </option>
            <option value="House">House</option>
            <option value="Land">Land</option>
            <option value="Commercial Property">Commercial Property</option>
          </select>

          {/* Name Field with Tooltip */}
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() =>
                setTooltip("personal info will not be made public.")
              }
              onBlur={() => setTooltip("")}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
            />
            {tooltip && (
              <div className="absolute top-full mt-1 bg-gray-100 border border-gray-300 p-2 rounded-md shadow-md text-xs">
                {tooltip}
              </div>
            )}
          </div>

          {/* Bedrooms Dropdown */}
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
          >
            <option value="" disabled>
              Select Bedrooms
            </option>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          {/* Budget Field (Number) */}
          <input
            type="number"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudgets(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
          />

          {/* Phone Number Field with Tooltip */}
          <div className="relative">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onFocus={() =>
                setTooltip("personal info will not be made public.")
              }
              onBlur={() => setTooltip("")}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
            />
            {tooltip && (
              <div className="absolute top-full mt-1 bg-gray-100 border border-gray-300 p-2 rounded-md shadow-md text-xs">
                {tooltip}
              </div>
            )}
          </div>

          {/* State Dropdown */}
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
          >
            <option value="" disabled>
              Select State
            </option>
            {statesInNigeria.map((stateName) => (
              <option key={stateName} value={stateName}>
                {stateName}
              </option>
            ))}
          </select>

          {/* Type of Individual Dropdown */}
          <select
            value={typeofindividual}
            onChange={(e) => setTypeOfIndividual(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
          >
            <option value="" disabled>
              Who is Asking
            </option>
            <option value="Agent">Agent</option>
            <option value="Individual">Individual</option>
          </select>

          {/* Email Field with Tooltip */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() =>
                setTooltip("personal info will not be made public.")
              }
              onBlur={() => setTooltip("")}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
            />
            {tooltip && (
              <div className="absolute top-full mt-1 bg-gray-100 border border-gray-300 p-2 rounded-md shadow-md text-xs">
                {tooltip}
              </div>
            )}
          </div>

          {/* Comment Textarea */}
          <textarea
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:border-[#33af67]"
          />

          {/* Submit Button */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-[#33af67] text-white p-3 rounded-md hover:bg-[#2a9c5a] transition-colors duration-300"
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
}
