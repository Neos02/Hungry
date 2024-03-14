import React from "react";

import Logo from "../../assets/images/logo.svg";
import SearchIcon from "../../assets/images/icon-search.svg";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar__container">
      <div className="NavBar__nav-left">
        <img className="NavBar__logo" src={Logo} alt="Hungry" />

        <ul className="NavBar__nav-list">
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Favorites</a>
          </li>
          <li>
            <a href="#">My Recipes</a>
          </li>
        </ul>
      </div>

      <div className="NavBar__nav-right">
        <form className="NavBar__search-bar">
          <input type="text" placeholder="Search" />
          <button>
            <img src={SearchIcon} alt="Search" />
          </button>
        </form>

        <button className="cta-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default NavBar;
