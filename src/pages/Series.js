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
  

          const datos = data.entries
          const url = datos.map((element) => element.images["Poster Art"])
  
          console.log(url);
  
    return (
      <div>
  
      <button onClick={soloSeries} value="Sólo series">Ver solo las series</button>
  
      <div >
          {series.length > 0 ? series.map((serie) => (
  
              <div key={serie.title}>
  
                  <p>{url.title}</p>
                  
              </div>
  
          )) : ""}
      </div>
      <div>
          {series.length > 0 ? url.map((url) => (
  
              <div key={url.title}>
  
                  <img src={url.url} alt="" />
                  
              </div>
  
          )) : ""}
      </div>
  
  </div>
    )
  }


export default Series;
