import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
// import Menu from "./menu/Menu";
// import Burger from "./hamburguesa/Burger";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/menu" element={<Menu />} />
      <Route path="/hamburguesa" element={<Burger />} />
      <Route path="/papas" element={<Menu />} />
      <Route path="/bebidas" element={<Menu />} /> */}
    </Routes>
  );
};

export default AppRoutes;
