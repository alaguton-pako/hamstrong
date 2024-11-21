"use client";
import { useState } from "react";
import { addPost } from "../models/addPosts";

export default function AddPost() {
  const [bedrooms, setBedrooms] = useState("");
  const [budget, setBudgets] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost(bedrooms, comment, budget, email, category);
    setCategory("");
    setComment("");
    setBedrooms("");
    setEmail("");
    setBudgets("");
    alert("Post added successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-center mb-4">Add a Post</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Budgets"
          value={budget}
          onChange={(e) => setBudgets(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
