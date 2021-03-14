import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/header.css";
function Header() {
  return (
    <nav className="nav-bar">
      <a href="/">
        <img src="logo.svg" alt="logo" />
      </a>
    </nav>
  );
}

export default Header;
