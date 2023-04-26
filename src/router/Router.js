import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from "../pages/Inicio";
import Series from "../pages/Series";
import Peliculas from "../pages/Peliculas";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/series" element={<Series />} />
      <Route path="/peliculas" element={<Peliculas />} />
    </Routes>
  );
};
export default Router;
