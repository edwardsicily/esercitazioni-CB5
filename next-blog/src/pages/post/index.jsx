import React from "react";
import PostcardList from "@/components/PostcardList";
import styles from "@/styles/Post.module.scss";
import MainLayout from "@/Layout/Mainlayout";

function PostHome({ posts }) {
  return (
    <MainLayout>
      <div className={styles.Wrapper}>
        {posts.map((el) => {
          return <PostcardList post={el} />;
        })}
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts: posts.posts,
    },
  };
}

export default PostHome;
