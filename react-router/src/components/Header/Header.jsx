import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <Link to={"/"}>Home</Link>
      <Link to={"/users"}>Users</Link>
      <Link to={"/posts"}>Posts</Link>
    </div>
  );
}

export default Header;
