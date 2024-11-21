// lib/addPost.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function addPost(bedrooms, comment, budget, email, category) {
  const postsCollection = collection(db, "post");
  await addDoc(postsCollection, {
    bedrooms,
    comment,
    budget,
    email,
    category,
    createdAt: serverTimestamp(),
  });
}
