import React, { useState } from "react";
import data from "../data/sample.json";
const Peliculas = () => {
  const [pelicula, setPelicula] = useState("");

  const soloPeliculas = () => {
    const peliculas = data.entries;
    const soloBuscaPeli = peliculas.filter(
      (element) => element.programType === "movie"
    );
    setPelicula(soloBuscaPeli);
  };

  const datos = data.entries;
  const url = datos.map((element) => element.images["Poster Art"]);

  return (
    <div className="bodyPortadas">
      <button className="boton"
        onClick={soloPeliculas}
        value="Mostrar los primeros 20 resultados"
      >
        Ver todas las Películas
      </button>
      <div className="grid grid-cols-7 gap-10">
        {pelicula.length > 0
          ? pelicula.map((peli) => (
              <div key={peli.title}>
                <img src={peli.images["Poster Art"].url} alt="" />
                <p>{peli.title}</p>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Peliculas;
