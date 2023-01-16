import React from "react";
import { useFetch } from "../../fetch/my-useFetch";
import { ENDPOINTS } from "../../fetch/endpoints";
import Post from "../post/post";
import "./postlist.css";

function PostList() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.POSTS);

  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <>
        <div>An error occurred</div>
        <button onClick={refetch}>Try Again</button>
      </>
    );
  return (
    <main className="main-content">
      {data?.posts?.map((el, idx) => {
        return <Post key={idx} postInfo={el} />;
      })}
      <button onClick={refetch}>RELOAD</button>
    </main>
  );
}

export default PostList;
