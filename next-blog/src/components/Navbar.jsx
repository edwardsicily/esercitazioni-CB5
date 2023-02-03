import React from "react";
import styles from "@/styles/Navbar.module.scss";
import Link from "next/link";

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.List}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/post">Posts</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
