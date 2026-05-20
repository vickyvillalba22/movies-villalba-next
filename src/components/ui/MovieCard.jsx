import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const MovieCard = ({id, title, image, releaseDate, puntuacion, endpoint}) => {

  return (

    <div className="group relative h-[45vh] w-55 shrink-0 overflow-hidden rounded-2xl bg-zinc-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40">

        <div className="relative h-full w-full overflow-hidden">

            <Image
            src={`https://image.tmdb.org/t/p/w500${image}`}
            fill
            sizes="260px"
            alt={title}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm font-medium text-white backdrop-blur-md">

            <Icon icon="mdi:star" className="text-yellow-400" />

            <span>{puntuacion}</span>

            </div>

        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 text-white">

            <h4 className="line-clamp-2 text-base font-bold md:text-lg">
            {title}
            </h4>

            <div className="mt-2 flex items-center gap-2 text-sm text-zinc-300">
                <Icon icon="mdi:calendar-month-outline" />
                <p>{releaseDate}</p>
            </div>

            <Link
            href={`${endpoint}${id}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
            >
                Ver detalle

                <Icon
                    icon="mdi:arrow-right"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                />
            </Link>

        </div>

    </div>
  )

}

export default MovieCard