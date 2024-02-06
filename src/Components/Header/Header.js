import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="#">
        BookCon
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="home">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="search">
            Search
          </NavLink>
          <NavLink className="nav-item nav-link" to="cart">
            My Cart
          </NavLink>
          <NavLink className="nav-item nav-link" to="wishlist">
            &#x2764;&#xFE0F;
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
