'use client'

import React, { useEffect, useState } from 'react'
import fetchData from '@/utils/fetchData'

const MejorPuntuadas = () => {

    const [puntuadas, setPuntuadas] = useState([])

    const endpoint = "/movie/top_rated"

    useEffect(()=>{

        async function getPuntuadas(){

            const data = await fetchData(endpoint)
            //console.log(data.results);
            setPuntuadas(data.results)
            
        }

        getPuntuadas();
        
    }, [])


  return (

    <div>
        
    <h2 className='text-2xl'>Películas mejor puntuadas</h2>  

    <div className='flex flex-wrap gap-1'>

        {puntuadas.map((puntuada, index)=>(
            <p key={index}>{puntuada.title}</p>
        ))}

    </div>


    </div>
  )
}

export default MejorPuntuadas