import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="NavBar">
      <ul>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/sardines">Sardines</NavLink></li>
        <li><NavLink to="/halibut">Halibut</NavLink></li>
        <li><NavLink to="/salmon">Salmon</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
