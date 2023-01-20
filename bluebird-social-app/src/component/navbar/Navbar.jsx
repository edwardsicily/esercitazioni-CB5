import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <ul>
        <li>What's new</li>
        <li>Explore</li>
        <li>Auth</li>
      </ul>

      <img src="https://picsum.photos/200" alt="" />
    </header>
  );
}

export default Navbar;
