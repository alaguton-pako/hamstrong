// lib/updatePost.js
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function updatePost(id, updatedData) {
  try {
    // Reference to the specific document in the 'post' collection
    const postRef = doc(db, "post", id);

    // Update the document with the new data
    await updateDoc(postRef, updatedData);

    // Optionally return success response
    return {
      success: true,
      message: "Post updated successfully!",
    };
  } catch (error) {
    // Handle errors and log them
    console.error("Error updating document: ", error);
    return {
      success: false,
      message: "Failed to update post. Please try again.",
    };
  }
}
