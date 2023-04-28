import React, { useState } from "react";
import data from "../../data/sample.json";

export const Ordenar = () => {
  const [peli, setPeli] = useState("");
  const [arrayPelis, setArrayPelis] = useState("");

  const ordenar = () => {
    const datos = data.entries;
    setArrayPelis(arrayPelis);
    const ordenado = datos.map((peli) => peli.title);
    console.log(ordenado);
    const ascendente = ordenado.sort();
    console.log(ascendente);
    setPeli(ascendente);
  };

  const info = ({ target }) => {};

  return (
    <div>
      <div>
        <button className="botonFunci" onClick={ordenar} placeholder="hola">
          Ordenar
        </button>
      </div>
      {peli.length > 0
        ? peli.map((peli) => (
            <div key={peli}>
              <p>{peli}</p>
              <button onClick={info} value={peli.title} placeholder="hola">
                ORDENAR
              </button>
              {/* <img src={peli.images["Poster Art"].url} alt="" /> */}
            </div>
          ))
        : ""}
    </div>
  );
};
