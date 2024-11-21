import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getPosts() {
  const postsCollection = collection(db, "post");
  const snapshot = await getDocs(postsCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
