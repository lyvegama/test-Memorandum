import React, { useState } from 'react'
import data from '../../data/sample.json'

export const Ordenar = () => {

    const [peli, setPeli] = useState("");

    const ordenar = () => {

        const datos = data.entries

        const ordenado = datos.map(peli => peli.title)
        console.log(ordenado);
        const ascendente = ordenado.sort();
        console.log(ascendente);
        setPeli(ascendente)
    }

    return (

        <div>
            <div>
                <button onClick={ordenar} value="Ordenar los resultados por el atributo title de manera ascendente con órden alfanumérico">Ordenar los resultados por el atributo title de manera ascendente con órden alfanumérico</button>
            </div>


            {peli.length > 0 ? peli.map((peli) => (

                <div key={peli}>

                    <p>{peli}</p>
            
                </div>

            )) : ""}

        </div>

    )
}