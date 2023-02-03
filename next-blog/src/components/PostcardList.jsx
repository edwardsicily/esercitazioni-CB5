import React from "react";
import styles from "@/styles/Post.module.scss";
import Link from "next/link";

function PostcardList({ post }) {
  return (
    <>
      <Link href={`/post/${post.id}`}>
        <div className={styles.Post}>
          <h4>{post.id}</h4>
          <div className="title">{post.title}</div>
        </div>
      </Link>
    </>
  );
}

export default PostcardList;
