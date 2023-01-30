import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <Link to={"/"}>Home</Link>
      <Link to={"/Users"}>Users</Link>
    </div>
  );
}

export default Header;
