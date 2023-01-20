import React from "react";
import Navbar from "../component/navbar/Navbar";
import "./layout.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer/> */}
    </>
  );
};
