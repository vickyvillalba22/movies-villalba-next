'use client'

import React, { useEffect, useState } from 'react'
import fetchData from '@/utils/fetchData'

const ProximosEstrenos = () => {

    const [estrenos, setEstrenos] = useState([])

    const endpoint = "/movie/upcoming"

    useEffect(()=>{

        async function getEstrenos(){

            const data = await fetchData(endpoint)
            console.log(data.results);
            setEstrenos(data.results)
            
        }

        getEstrenos();
        
    }, [])


  return (

    <div>
        
    <h2 className='text-2xl'>Próximos estrenos</h2>  

    <div className='flex flex-wrap gap-1'>

        {estrenos.map((estreno, index)=>(
            <p key={index}>{estreno.title}</p>
        ))}

    </div>


    </div>
  )
}

export default ProximosEstrenos