import React from "react";
import styles from "@/styles/Navbar.module.scss";
import Link from "next/link";

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
        <li>
          <Link href={"/posts"}>Posts</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
