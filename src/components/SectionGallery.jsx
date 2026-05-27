'use client'

import React, { useEffect, useState } from 'react'
import fetchData from '@/utils/fetchData'
import MovieCard from './ui/MovieCard'
import Loader from './ui/Loader'

import { useAppContext } from '@/contexts/AppContext'

const SectionGallery = ({endpoint, title}) => {

    const [movies, setMovies] = useState([])

    const { mode, loading, setLoading } = useAppContext()

    const detailEndpoint = mode === 'movies' ? '/detail/movie/' : '/detail/tv/'

    useEffect(()=>{

        async function getMovies(){

            const data = await fetchData(endpoint)
            
            setMovies(data.results)
            setLoading(false)
            
        }

        getMovies();
        
    }, [endpoint])

  return (

    <div className='w-[90%]'>
        
        <h2 className='text-2xl'>{title}</h2> 

        {loading && <Loader />}

        {!loading && <div className="flex gap-6 overflow-x-auto px-4 py-6 no-scrollbar snap-x snap-mandatory">

            {movies.map((movie, index)=>(

                <MovieCard 
                    key={index} 
                    id={movie.id} 
                    title={movie.title || movie.name} 
                    image={movie.poster_path} 
                    releaseDate={movie.release_date || movie.first_air_date}
                    puntuacion={movie.vote_average}
                    endpoint={detailEndpoint}
                    type={mode} 
                />
                
            ))}

        </div>} 

    </div>
  )
}

export default SectionGallery