import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sardines from "./Sardines";
import Halibut from "./Halibut";
import Salmon from "./Salmon";
import Home from "./Home";

//TODO: Separate routes list component

function VendingMachine() {
  return (
    <Routes>
      <Route path="/sardines" element={<Sardines />} />
      <Route path="/halibut" element={<Halibut />} />
      <Route path="/salmon" element={<Salmon />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default VendingMachine;