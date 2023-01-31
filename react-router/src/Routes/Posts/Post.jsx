import React from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

function Post({ data }) {
  const navigate = useNavigate();
  return (
    <div className={styles.postWrapper}>
      <div className="title">{data.title}</div>
      <button
        onClick={() => {
          navigate(`/posts/${data.id}`);
        }}
      >
        READ MORE
      </button>
    </div>
  );
}

export default Post;
