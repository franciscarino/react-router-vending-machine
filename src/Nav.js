import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/sardines">Sardines</Link></li>
      <li><Link to="/halibut">Halibut</Link></li>
      <li><Link to="/salmon">Salmon</Link></li>
    </ul>
  );
}

export default Nav;

