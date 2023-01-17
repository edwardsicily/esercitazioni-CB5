import React, { useEffect } from "react";
import { useFetch } from "../../fetch/my-useFetch";
import { ENDPOINTS } from "../../fetch/endpoints";
import Post from "../post/Post";
import { GET } from "../../utils/http";
import "./postlist.css";

function PostList() {
  const { data, error, loading } = useFetch(ENDPOINTS.POSTS);

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
    </main>
  );
}

export default PostList;
