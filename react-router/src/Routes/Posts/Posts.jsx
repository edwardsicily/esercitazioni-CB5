import React, { useEffect, useState } from "react";
import { GET } from "../../utils/http";
import Post from "./Post";
import styles from "./styles.module.scss";

function Posts() {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    GET("/posts")
      .then((res) => setPostData(res.posts))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.postsListWrapper}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {postData?.map((post, idx) => {
            return <Post key={idx} data={post} />;
          })}
        </>
      )}
      {}
    </div>
  );
}

export default Posts;
