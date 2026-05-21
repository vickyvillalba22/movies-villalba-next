'use client'

import React, { useEffect, useState } from 'react'
import fetchData from '@/utils/fetchData'
import MovieCard from './ui/MovieCard'

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

    <div className='w-[95%]'>
        
    <h2 className='text-2xl'>Películas mejor puntuadas</h2>  

    <div className="flex gap-6 overflow-x-auto px-4 py-6 no-scrollbar snap-x snap-mandatory">

        {puntuadas.map((movie, index)=>(

            <MovieCard key={index} id={movie.id} title={movie.title} image={movie.poster_path} releaseDate={movie.release_date} puntuacion={movie.vote_average} endpoint="/detail/" />
            
        ))}

    </div>


    </div>
  )
}

export default MejorPuntuadas