'use client'

import React, { useEffect, useState } from 'react'
import fetchData from '@/utils/fetchData'
import MovieCard from './ui/MovieCard'

const Cartelera = () => {

    const [carteleras, setCarteleras] = useState([])

    const endpoint = "/movie/now_playing"

    useEffect(()=>{

        async function getCartelera(){

            const data = await fetchData(endpoint)
            //console.log(data.results);
            setCarteleras(data.results)
            
        }

        getCartelera();
        
    }, [])


  return (

    <div className='w-[95%]'>
        
    <h2 className='text-2xl'>En cartelera</h2>  

    <div className="flex gap-6 overflow-x-auto px-4 py-6 no-scrollbar snap-x snap-mandatory">

        {carteleras.map((movie, index)=>(

            <MovieCard key={index} id={movie.id} title={movie.title} image={movie.poster_path} releaseDate={movie.release_date} puntuacion={movie.vote_average} endpoint="/detail/" />
            
        ))}

    </div>


    </div>
  )
}

export default Cartelera