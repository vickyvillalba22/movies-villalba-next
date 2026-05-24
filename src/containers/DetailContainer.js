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

    const datos = [
        {
            name: "Release",
            value: movie.release_date
        },
                    {
            name: "Duration",
            value: movie.runtime
        },
        {
            name: "Language",
            value: movie.original_language
        },
        {
            name: "State",
            value: movie.status
        },
    ]

    return (

        <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">

            {/*background image*/}
            <div className="absolute inset-0">

                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    fill
                    alt="fondo de pelicula"
                    className="object-cover opacity-40"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/20" />

            </div>

            {/*content*/}
            <div className="relative z-10 flex min-h-screen flex-col justify-end px-5 pb-8 pt-20">

                {/*rating*/}
                <div className="mb-3 flex items-center gap-2 text-sm text-zinc-300">

                    <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-semibold text-white">
                        IMDb
                    </span>

                    <span className="font-medium">
                        {movie.vote_average?.toFixed(1)}
                    </span>

                </div>

                {/*title*/}
                <h1 className="max-w-[90%] text-4xl font-bold leading-tight">
                    {movie.title}
                </h1>

                {/*genres*/}
                <ul className="mt-4 flex flex-wrap gap-2">

                    {movie.genres?.map((genre, index) => (

                        <li
                            key={index}
                            className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm text-zinc-200 backdrop-blur-md"
                        >
                            {genre.name}
                        </li>

                    ))}

                </ul>

                {/*overview*/}
                <p className="mt-5 line-clamp-5 text-sm leading-relaxed text-zinc-300">
                    {movie.overview}
                </p>

                {/*info card*/}
                <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">

                    <div className="flex items-center justify-between text-sm">

                    {datos.map((dato, index)=>(
                        <div key={index} className="flex flex-col">
                            <span className="text-zinc-400">
                                {dato.name}
                            </span>
                            <span className="font-medium">
                                {dato.value}
                            </span>
                        </div>
                    ))}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default DetailContainer