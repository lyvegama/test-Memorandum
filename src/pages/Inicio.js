import React from "react";
import { Ordenar } from "../components/function/Ordenar";
import { PrimerosVeinte } from "../components/function/PrimerosVeinte";
import { Mostrar } from "../components/function/Mostrar";

import holder from "../assets/placeholder.png";

const Inicio = () => {
  return (
    <div className="inicio flex items-center text-white">
      <div className="caja">
        <a class="nav-link" href="/series">
          SERIES
          <img src={holder} className="nav-img" />
        </a>
      </div>
      <div className="caja">
        <a class="nav-link" href="/peliculas">
          MOVIES
          <img src={holder} className="nav-img" />
        </a>
      </div>

      <Ordenar />
      <PrimerosVeinte />
      <Mostrar />
    </div>
  );
};

export default Inicio;
