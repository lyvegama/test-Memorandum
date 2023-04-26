  import React, { useState } from 'react'
  import data from '../data/sample.json'

const Series = () => {
    
      const [series, setSeries] = useState("");
  
      const soloSeries = () => {
  
          const series = data.entries
          const soloBuscaSerie = series.filter((element) => element.programType === "series")
          console.log(soloBuscaSerie);
          setSeries(soloBuscaSerie)
      }
  
  
    return (
      <div className='series'>
  <h1>Series</h1>
      <button onClick={soloSeries} value="Ver las series">Ver las series</button>
  
      <div>
          {series.length > 0 ? series.map((serie) => (
  
              <div key={serie.title}>
  
                  <p>{serie.title}</p>
                  
              </div>
  
          )) : ""}
      </div>
  
  
  </div>
    )
  };


export default Series;
