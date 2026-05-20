'use client'

import React, { useEffect, useState } from 'react'
import fetchData from '@/utils/fetchData'

const Cartelera = () => {

    const [carteleras, setCarteleras] = useState([])

    const endpoint = "/movie/now_playing"

    useEffect(()=>{

        async function getCartelera(){

            const data = await fetchData(endpoint)
            console.log(data.results);
            setCarteleras(data.results)
            
        }

        getCartelera();
        
    }, [])


  return (

    <div>
        
    <h2 className='text-2xl'>En cartelera</h2>  

    <div className='flex flex-wrap gap-1'>

        {carteleras.map((cartelera, index)=>(
            <p key={index}>{cartelera.title}</p>
        ))}

    </div>


    </div>
  )
}

export default Cartelera