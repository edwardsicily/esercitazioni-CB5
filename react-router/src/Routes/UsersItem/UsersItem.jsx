import React from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

function UsersItem({ data }) {
  const navigate = useNavigate();

  const gotoUserInfo = (url) => {
    console.log(url);
    navigate(url);
  };
  return (
    <div
      onClick={() => {
        gotoUserInfo(`${data.id}`);
      }}
      className={styles.Wrapper}
    >
      <img className={styles.image} src={data.image} alt="" />
      <div>{`${data.firstName} ${data.lastName}`}</div>
    </div>
  );
}

export default UsersItem;
