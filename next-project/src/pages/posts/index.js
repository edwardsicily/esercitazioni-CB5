import React from "react";
import Layout from "@/layout/Layout";
import styles from "@/styles/Pages.module.scss";

function Posts({ posts }) {
  return (
    <Layout>
      <div className={styles.Posts}>
        {posts &&
          posts.map((post) => {
            return (
              <div className={styles.postWrapper}>
                <div>{post.title}</div>
              </div>
            );
          })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const resPosts = await fetch("https://dummyjson.com/posts");
  const dataPosts = await resPosts.json();
  return {
    props: {
      posts: dataPosts.posts,
    },
  };
}

export default Posts;
