"use client";
import { useState } from "react";
import { addPost } from "../models/addPosts";

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
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error and success messages before starting the submission process
    setErrorMessage("");
    setSuccessMessage("");

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

      // If the post is successfully added
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
        setSuccessMessage(response.message);
        alert(
          "Request submitted successfully! Your request will be uploaded after review."
        );

        // Close modal or perform other success actions
        setOpen(false);
      } else {
        // If an error occurred, display the error message
        setErrorMessage(response.message);
      }
    } catch (error) {
      // Catch any unexpected errors and display a generic error message
      console.error("Submission error:", error);
      setErrorMessage(
        "An error occurred while submitting your request. Please try again later."
      );
    }
  };

  return (
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
            onFocus={() => setTooltip("Information will not be made public.")}
            onBlur={() => setTooltip("")}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
          />
          {tooltip && (
            <div className="absolute top-full mt-1 bg-gray-100 border border-gray-300 p-2 rounded-md shadow-md text-sm">
              {tooltip}
            </div>
          )}
        </div>

        {/* Bedrooms Dropdown */}
        <select
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          required
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
            onFocus={() => setTooltip("Information will not be made public.")}
            onBlur={() => setTooltip("")}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
          />
          {tooltip && (
            <div className="absolute top-full mt-1 bg-gray-100 border border-gray-300 p-2 rounded-md shadow-md text-sm">
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
            onFocus={() => setTooltip("Information will not be made public.")}
            onBlur={() => setTooltip("")}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
          />
          {tooltip && (
            <div className="absolute top-full mt-1 bg-gray-100 border border-gray-300 p-2 rounded-md shadow-md text-sm">
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
          type="submit"
          className="bg-[#33af67] text-white p-3 rounded-md hover:bg-[#2a9c5a] transition-colors duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
