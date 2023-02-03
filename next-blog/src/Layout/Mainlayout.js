import React from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/MainLayout.module.scss";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.Main}>{children}</div>
    </>
  );
}

export default MainLayout;
