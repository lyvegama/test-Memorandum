import React, { useState } from 'react'
import data from '../../data/sample.json'

export const ReleaseYear = () => {

    const [peli, setPeli] = useState("");


    const year = () => {

        const datos = data.entries

        const condicion = datos.filter((element) => element.releaseYear >= 2010)
        console.log(condicion);

        setPeli(condicion)
    }

    return (
        <div>
            <div>
                <button onClick={year} value="Mostrar sólo si contienen el atributo releaseYear >= 2010">Mostrar sólo si contienen el atributo releaseYear 2010</button>
            </div>


            {peli ? peli.map((peli) => (

                <div key={peli}>

                    <p>{peli}</p>

                </div>

            )) : ""}
        </div>

    )
}