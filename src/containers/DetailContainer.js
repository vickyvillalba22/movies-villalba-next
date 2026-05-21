'use client'

import React, { useEffect, useState } from 'react'
import fetchData from '@/utils/fetchData'
import Image from 'next/image'

const DetailContainer = ({id}) => {

    const [movie, setMovie] = useState({})
    
    useEffect(()=>{

        async function getMovie() {

            const data = await fetchData(`/movie/${id}`)
            console.log(data);
            
            setMovie(data)
            
        }

        getMovie()
        

    }, [id])

    return (

        <div>
            
            {movie.title}

            <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}  width={100} height={100} alt="movie" />
        
        
        </div>
    )
}

export default DetailContainer