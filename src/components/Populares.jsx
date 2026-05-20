'use client'

import React, { useEffect, useState } from 'react'
import fetchData from '@/utils/fetchData'

const Populares = () => {

    const [populares, setPopulares] = useState([])

    const endpoint = "/movie/popular"

    useEffect(()=>{

        async function getPopulares(){

            const data = await fetchData(endpoint)
            //console.log(data.results);
            setPopulares(data.results)
            
        }

        getPopulares();
        
    }, [])


  return (

    <div>
        
    <h2 className='text-2xl'>Películas populares</h2>  

    <div className='flex flex-wrap gap-1'>

        {populares.map((popular, index)=>(
            <p key={index}>{popular.title}</p>
        ))}

    </div>


    </div>
  )
}

export default Populares