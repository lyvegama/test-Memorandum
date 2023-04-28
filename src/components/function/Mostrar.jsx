import React, { useState } from "react";
import data from "../../data/sample.json";

export const Mostrar = () => {
  const [peli, setPeli] = useState("");
  const year = () => {
    const datos = data.entries;
    const condicion = datos.filter((element) => element.releaseYear >= 2010);
    setPeli(condicion);
  };

  return (
    <div>
      <div>
        <button className="botonFunci"
          onClick={year}
          value="Mostrar sólo si contienen el atributo releaseYear >= 2010"
        >
          Mostrar sólo si contienen el atributo releaseYear 2010
        </button>
      </div>
      {peli
        ? peli.map((peli) => (
            <div key={peli}>
              <p>{peli}</p>
            </div>
          ))
        : ""}
    </div>
  );
};
