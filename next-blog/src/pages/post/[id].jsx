import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GET } from "@/utils/http";
import styles from "@/styles/SPost.module.scss";
import MainLayout from "@/Layout/Mainlayout";

function SinglePost() {
  const [data, setData] = useState(null);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    GET(`posts/${id}`).then((res) => setData(res));
  }, [router.isReady]);

  return (
    <MainLayout>
      <div className={styles.Wrapper}>
        {!data ? (
          <div>Loading...</div>
        ) : (
          <>
            <h3 className={styles.Title}>{data.title}</h3>
            <h4 className={styles.Body}>{data.body}</h4>
            <div className={styles.Info}>
              <div>Likes: {data.reactions}</div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
}

export default SinglePost;
