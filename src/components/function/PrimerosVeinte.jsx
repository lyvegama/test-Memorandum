import React, { useState } from "react";
import data from "../../data/sample.json";

export const PrimerosVeinte = () => {
  const [pelicula, setPelicula] = useState("");
  const [infoPelicula, setInfoPelicula] = useState("");
  const [bandera, setBandera] = useState(false);

  const primerosVeinte = () => {
    const datos = data.entries;
    const veinteDatos = datos.slice(0, 20);
    setPelicula(veinteDatos);
  };

  const info = ({ target }) => {
    const datos = data.entries;
    const datosFind = datos.map((element) => element.title);
    const datosEvento = target.value;
    const found = datos.find((element) => element.title == datosEvento);
    setInfoPelicula(found);
    setBandera(true);
  };

  return (
    <div className="bodyPortadas">
      <button className="botonFunci" onClick={primerosVeinte}>Los primeros 20</button>
      {bandera && (
        <div>
          <p>{infoPelicula.title}</p>
          <p>{infoPelicula.description}</p>
          <p>{infoPelicula.releaseYear}</p>
          <img src={infoPelicula.images["Poster Art"].url} alt="" />
        </div>
      )}
      <div>
        {pelicula.length > 0
          ? pelicula.map((peli) => (
              <div key={peli.title}>
                {
                  <button onClick={info} value={peli.title}>
                    {peli.title}
                  </button>
                }
                <img src={peli.images["Poster Art"].url} alt="" />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};
