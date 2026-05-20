'use client'

import React, { useEffect, useState } from 'react'
import fetchData from '@/utils/fetchData'
import MovieCard from './ui/MovieCard'

const Tendencias = () => {

    const [tendencias, setTendencias] = useState([])

    const endpoint = "/trending/movie/day"

    useEffect(()=>{

        async function getTendencias(){

            const data = await fetchData(endpoint)
            //console.log(data.results);
            setTendencias(data.results)
            
        }

        getTendencias();
        
    }, [])


  return (

    <div className='w-[90%]'>
        
    <h2 className='text-2xl'>Tendencias</h2>  

    <div className="flex gap-6 overflow-x-auto px-4 py-6 no-scrollbar snap-x snap-mandatory">

        {tendencias.map((movie, index)=>(

            <MovieCard key={index} id={movie.id} title={movie.title} image={movie.poster_path} releaseDate={movie.release_date} puntuacion={movie.vote_average} endpoint="/movie/" />
            
        ))}

    </div>


    </div>
  )
}

export default Tendencias