import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET } from "../../utils/http";
import Button from "../../atoms/Button/Button";
import styles from "./styles.module.scss";

function SinglePost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const { postid } = useParams();
  const navigate = useNavigate();

  const gotoNext = () => navigate(`/posts/${parseInt(postid) + 1}`);
  const gotoPrev = () => navigate(`/posts/${parseInt(postid) - 1}`);

  useEffect(() => {
    setLoading(true);
    GET(`/posts/${postid}`)
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, [postid]);

  return (
    <div className={styles.SinglePostWrapper}>
      <div className={styles.SinglePost}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className={styles.Title}>{data?.title}</div>
            <div className={styles.Body}>{data?.body}</div>
            <div className={styles.Bottom}>
              <div>Likes: {data?.reactions}</div>
              <div>Tags: #{data?.tags.join("  #")}</div>
            </div>
          </>
        )}
      </div>
      <div className={styles.btnContainer}>
        <Button
          content={"prev"}
          action={gotoPrev}
          disabled={postid == 1 ? true : false}
        />
        <Button content={"next"} action={gotoNext} />
      </div>
    </div>
  );
}

export default SinglePost;
