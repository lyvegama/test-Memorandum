import React, { useState } from "react";
import data from "../data/sample.json";
const Peliculas = () => {
  const [pelicula, setPelicula] = useState("");

  const soloPeliculas = () => {
    const peliculas = data.entries;

    const soloMovies = peliculas.filter(
      (element) => element.programType === "movie"
    );
    console.log(soloMovies);
    setPelicula(soloMovies);
  };

  return (
    <div className="Peliculas">
      <h1>Películas</h1>

      <button onClick={soloPeliculas} value="Ver las películas">Ver las películas</button>

      <div>
        {pelicula.length > 0
          ? pelicula.map((peli) => (
              <div key={peli.title}>
                <p>{peli.title}</p>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Peliculas;
