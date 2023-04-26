import React, { useState } from "react";
import data from "../data/sample.json";
const Peliculas = () => {

 
      const [pelicula, setPelicula] = useState("");
  
  
      const soloPeliculas = () => {
  
          const peliculas = data.entries
  
          const soloMovies = peliculas.filter((element) => element.programType === "movie")
          console.log(soloMovies);
          setPelicula(soloMovies)
      }
  
  
      const datos = data.entries
      const url = datos.map((element) => element.images["Poster Art"])
  
      console.log(url);
  
  
      return (
          <div>
  
              <button onClick={soloPeliculas} value="Peliculas">Mostrar las Películas</button>
  
              <div>
                  {pelicula.length > 0 ? pelicula.map((peli) => (
  
                      <div key={peli.title}>
  
                          <p>{peli.title}</p>
                          
                      </div>
  
                  )) : ""}
              </div>
  
              <div>
                  {pelicula.length > 0 ? url.map((url) => (
  
                      <div key={url.title}>
                          
  
                          <img src={url.url} alt="" />
  
                      </div>
  
                  )) : ""}
              </div>
  
  
  
          </div>
  
      )
  }

export default Peliculas;
