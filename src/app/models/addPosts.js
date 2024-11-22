// lib/addPost.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function addPost(
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
) {
  const postsCollection = collection(db, "post");

  try {
    // Attempt to add a new document to Firebase Firestore
    await addDoc(postsCollection, {
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
      isApproved,
      createdAt: serverTimestamp(),
    });
    // Optionally return success response or message
    return {
      success: true,
      message:
        "Rquest submitted successfully!, your request will be passed for upload once it is reviewed",
    };
  } catch (error) {
    // Handle errors and log them
    console.error("Error adding document: ", error);
    // Return error response with message
    return {
      success: false,
      message: "Failed to submit request. Please try again.",
    };
  }
}
