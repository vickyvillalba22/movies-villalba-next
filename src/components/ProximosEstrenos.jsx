'use client'

import React, { useEffect, useState } from 'react'
import fetchData from '@/utils/fetchData'
import MovieCard from './ui/MovieCard'

const ProximosEstrenos = () => {

    const [estrenos, setEstrenos] = useState([])

    const endpoint = "/movie/upcoming"

    useEffect(()=>{

        async function getEstrenos(){

            const data = await fetchData(endpoint)
            //console.log(data.results);
            setEstrenos(data.results)
            
        }

        getEstrenos();
        
    }, [])


  return (

    <div className='w-[95%]'>
        
    <h2 className='text-2xl'>Próximos estrenos</h2>  

    <div className="flex gap-6 overflow-x-auto px-4 py-6 no-scrollbar snap-x snap-mandatory">

        {estrenos.map((movie, index)=>(

            <MovieCard key={index} id={movie.id} title={movie.title} image={movie.poster_path} releaseDate={movie.release_date} puntuacion={movie.vote_average} endpoint="/movie/" />
            
        ))}

    </div>


    </div>
  )
}

export default ProximosEstrenos