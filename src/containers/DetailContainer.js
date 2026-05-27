'use client'

import React, { useEffect, useState } from 'react'
import fetchData from '@/utils/fetchData'
import Image from 'next/image'

import Loader from '@/components/ui/Loader'
import { useAppContext } from '@/contexts/AppContext'

const DetailContainer = ({id, type}) => {

    const { loading, setLoading } = useAppContext()

    const [movie, setMovie] = useState(null)
    
    useEffect(()=>{

        async function getMovie() {

            const data = await fetchData(`/${type}/${id}`)
            console.log(data);
            
            setMovie(data)
            setLoading(false)
            
        }

        getMovie()
        

    }, [id])

    if (!movie) return <p>Cargando...</p>

    const datos = [
        {
            name: "Release",
            value: movie.release_date || movie.first_air_date
        },
        {
        name: type === 'movie'
            ? "Duration"
            : "Seasons",
        value: type === 'movie'
            ? movie.runtime
            : movie.number_of_seasons
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

        <div>

        {loading && <Loader />}
        
        {!loading && <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">

        {/* background image */}
        <div className="absolute inset-0">

            <Image
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                fill
                alt="fondo"
                className="object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-black/10 md:bg-black/40" />

        </div>

        {/* content */}
        <div className="relative z-3 flex min-h-screen items-end px-5 pb-8 pt-20 md:items-center md:justify-center md:px-10">

            <div className="flex w-full flex-col gap-8 md:max-w-6xl md:flex-row md:items-center">

                {/* poster */}
                <div className="hidden md:block md:w-[35%]">

                    <div className="relative aspect-2/3 overflow-hidden rounded-3xl border border-white/10 shadow-2xl h-[60vh]">

                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            fill
                            alt={movie.title || movie.name}
                            className="object-cover"
                        />

                    </div>

                </div>

                {/* info */}
                <div className="flex flex-1 flex-col">

                    {/* rating */}
                    <div className="mb-3 flex items-center gap-2 text-sm text-zinc-300">

                        <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-semibold text-white">
                            IMDb
                        </span>

                        <span className="font-medium">
                            {movie.vote_average?.toFixed(1)}
                        </span>

                    </div>

                    {/* title */}
                    <h1 className="max-w-[90%] text-4xl font-bold leading-tight md:text-6xl">
                        {movie.title || movie.name}
                    </h1>

                    {/* genres */}
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

                    {/* overview */}
                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
                        {movie.overview}
                    </p>

                    {/* info card */}
                    <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">

                        <div className="grid grid-cols-2 gap-5 text-sm md:grid-cols-4">

                            {datos.map((dato, index) => (

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
            </div>
        </section>
    
    }

    </div>
           
    )
}

export default DetailContainer