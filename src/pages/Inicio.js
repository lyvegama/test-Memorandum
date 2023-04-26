import React from "react";
import { Ordenar } from "../components/function/Orden";
import { PrimerosVeinte } from "../components/function/PrimerVeinte";
import { ReleaseYear } from "../components/function/Mostrar";

const Inicio = () => {
  return (
    <div className="inicio">
      <h1>Funcionalidades</h1>
      <Ordenar />
      <PrimerosVeinte />
      <ReleaseYear />

    </div>
  );
};

export default Inicio;
