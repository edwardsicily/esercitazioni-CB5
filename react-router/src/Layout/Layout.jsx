import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import styles from "./styles.module.scss";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
