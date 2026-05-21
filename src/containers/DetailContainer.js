'use client'

import React, { useEffect, useState } from 'react'
import fetchData from '@/utils/fetchData'

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

        <div>{movie.title}</div>
    )
}

export default DetailContainer