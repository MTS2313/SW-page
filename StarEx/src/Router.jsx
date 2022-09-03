import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import StarShips from "./Pages/ShipsView";
function Routers() {
  return (
    <div className="Router">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<StarShips />} path="/ships" />
        <Route element={<Login />} path="/Login" />
      </Routes>
    </div>
  );
}

export default Routers;
