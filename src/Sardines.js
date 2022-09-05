import React from "react";
import { Link } from "react-router-dom";

function Sardines() {
  return (
    <div>
      <h1>This is the SARDINES page!</h1>
      <li><Link to="/">Home</Link></li>
      <img src="https://images.unsplash.com/photo-1567087978459-8a8eeac7bc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80" alt="sardines" />
    </div>

  );
}

export default Sardines;