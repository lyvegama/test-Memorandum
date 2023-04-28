import React, { useState } from "react";
import data from "../data/sample.json";

const Series = () => {
  const [series, setSeries] = useState("");

  const soloSeries = () => {
    const series = data.entries;
    const soloBuscaSerie = series.filter(
      (element) => element.programType === "series"
    );
    setSeries(soloBuscaSerie);
  };

  const datos = data.entries;
  const url = datos.map((element) => element.images["Poster Art"]);

  return (
    <div className="bodyPortadas">
      <button className="boton" onClick={soloSeries} value="Sólo series">
        Ver todas las series
      </button>
      <div className="grid grid-cols-7 gap-10">
        {series.length > 0
          ? series.map((serie) => (
              <div key={serie.title}>
                <img className="portada" src={serie.images["Poster Art"].url} alt="" />
                <p>{serie.title}</p>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Series;
