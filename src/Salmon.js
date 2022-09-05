import React from "react";
import { Link } from "react-router-dom";
function Salmon() {
  return (
    <div>
      <h1>This is the SALMON page!</h1>
      <li><Link to="/">Home</Link></li>
      <img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="salmon" />

    </div>

  );
}

export default Salmon;