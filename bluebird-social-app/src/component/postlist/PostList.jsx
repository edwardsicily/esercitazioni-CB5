import React, { useEffect, useState } from "react";
import { useFetch } from "../../fetch/my-useFetch";
import { ENDPOINTS } from "../../fetch/endpoints";
import Post from "../post/Post";
import { GET } from "../../utils/http";
import "./postlist.css";

function PostList({ searchValue }) {
  console.log();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //const { data, error, loading } = useFetch(ENDPOINTS.POSTS);

  useEffect(() => {
    setLoading(true);
    GET(ENDPOINTS.POSTS)
      .then((res) => {
        if (searchValue === "") {
          setData(res.posts);
          console.log();
          return;
        }
        setData(res.posts.filter((post) => post.body.includes(searchValue)));
        console.log("array filtrato");
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [searchValue]);

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
      {data?.map((el, idx) => {
        return <Post key={idx} postInfo={el} />;
      })}
    </main>
  );
}

export default PostList;
