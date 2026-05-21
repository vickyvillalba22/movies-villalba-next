'use client'

import React, { useEffect, useState } from 'react'
import fetchData from '@/utils/fetchData'
import MovieCard from './ui/MovieCard'

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

    <div className='w-[95%]'>
        
    <h2 className='text-2xl'>Películas populares</h2>  

    <div className="flex gap-6 overflow-x-auto px-4 py-6 no-scrollbar snap-x snap-mandatory">

        {populares.map((movie, index)=>(

            <MovieCard key={index} id={movie.id} title={movie.title} image={movie.poster_path} releaseDate={movie.release_date} puntuacion={movie.vote_average} endpoint="/detail/" />
            
        ))}

    </div>


    </div>
  )
}

export default Populares