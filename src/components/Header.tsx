import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/header.css";
function Header() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img
          src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png"
          alt="logo"
        />
      </Link>
    </nav>
  );
}

export default Header;
