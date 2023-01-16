import React, { useEffect, useState } from "react";
import { useFetch } from "../../fetch/my-useFetch";
import { ENDPOINTS } from "../../fetch/endpoints";
import "./post.css";
function Post({ postInfo }) {
  const { data, error, loading, refetch } = useFetch(
    `${ENDPOINTS.USERS}/${postInfo.userId}`
  );
  return (
    <div className="post">
      <div className="top">
        <img className="user-img" src={data?.image} alt="" />
        <h3>{`${data?.firstName} ${data?.lastName}`}</h3>
        <h5>{`@${data?.username}`}</h5>
      </div>
      <div className="content">{postInfo.body}</div>

      <div className="bottom"></div>
    </div>
  );
}

export default Post;
