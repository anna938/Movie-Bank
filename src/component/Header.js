import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <div className="container">
        <nav>
          <NavLink to="/">
            <img src="img/movieBank-logo.png" alt="" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
