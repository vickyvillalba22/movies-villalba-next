import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative flex h-[80vh] w-full items-center overflow-hidden bg-black px-6 text-white">

        {/*background image*/}
        <div className="absolute inset-0">

            <Image
                src="/hero-bg.jpg"
                fill
                alt="Movies background"
                className="object-cover opacity-40"
            />

            {/*reflector gradient*/}
            <div className="absolute inset-0 bg-radial-[at_50%_30%] from-white/20 via-black/40 to-black" />

            {/*overlay*/}
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black" />

        </div>

        {/*content*/}
        <div className="relative z-10 flex max-w-sm flex-col gap-5">

            <span className="w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-zinc-300 backdrop-blur-md">
                Streaming Platform
            </span>

            <h1 className="text-5xl font-black leading-none">
                Movies
                <br />
                & Series
            </h1>

            <p className="max-w-xs text-sm leading-relaxed text-zinc-300">
                All your favourite movies and series in one place.
                Explore trending releases and timeless classics.
            </p>

        </div>

    </section>
  )
}

export default HeroSection