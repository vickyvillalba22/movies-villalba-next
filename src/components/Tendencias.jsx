'use client'

import React, { useEffect, useState } from 'react'
import fetchData from '@/utils/fetchData'

const Tendencias = () => {

    const [tendencias, setTendencias] = useState([])

    const endpoint = "/trending/movie/day"

    useEffect(()=>{

        async function getTendencias(){

            const data = await fetchData(endpoint)
            console.log(data.results);
            setTendencias(data.results)
            
        }

        getTendencias();
        
    }, [])


  return (

    <div>
        
    <h2 className='text-2xl'>Tendencias</h2>  

    <div className='flex flex-wrap gap-1'>

        {tendencias.map((tendencia, index)=>(
            <p key={index}>{tendencia.title}</p>
        ))}

    </div>


    </div>
  )
}

export default Tendencias