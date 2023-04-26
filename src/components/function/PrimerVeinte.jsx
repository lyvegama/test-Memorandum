import React, { useState } from 'react'
import data from '../../data/sample.json'

export const PrimerosVeinte = () => {

    const [pelicula, setPelicula] = useState("");

    const primerosVeinte = () => {

        const datos = data.entries

        const veinteDatos = datos.slice(0, 20)
        console.log(veinteDatos);

        setPelicula(veinteDatos)
    }

    return (
        <div>

            <button onClick={primerosVeinte} value="Mostrar los primeros 20 resultados">Mostrar los primeros 20 resultados</button>
            <div>
                {pelicula.length > 0 ? pelicula.map((peli) => (

                    <div key={peli.title}>

                        <p>{peli.title}</p>
                        <img src={peli["Poster Art"]} alt="" />

                    </div>

                )) : ""}

            </div>

        </div>
    );
}