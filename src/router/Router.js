import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from "../pages/Inicio";
import Series from "../pages/Series";
import Peliculas from "../pages/Peliculas";
import Error from "../pages/Error";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/series" element={<Series />} />
      <Route path="/peliculas" element={<Peliculas />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
};
export default Router;
