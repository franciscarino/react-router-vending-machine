import React from "react";
import { Link } from "react-router-dom";

function Halibut() {
  return (
    <div>
      <h1>This is the HALIBUT page!</h1>
      <li><Link to="/">Home</Link></li>
      <img src="https://images.unsplash.com/photo-1633244092660-313404d8d295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="halibut" />

    </div>
  );
}

export default Halibut;