"use client";
import AddPost from "../components/AddPost";
import { getPosts } from "../models/getPosts";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      console.log(data);
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="w-[80%] mx-auto flex justify-center">
      <div className="flex flex-col gap-3 mt-11">
        <AddPost />
        <h1>Visitor Posts</h1>
        {/* {posts === 0 ? (
          <p>Nothing here yet</p>
        ) : (
          posts.map((post) => (
            <div key={post.id}>
              <h2>{post.category}</h2>
              <p>{post.comment}</p>
              <p>{post.createdAt}</p>
            </div>
          ))
        )} */}
      </div>
    </div>
  );
}
