import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Menu from "./menu/Menu";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
};

export default AppRoutes;
