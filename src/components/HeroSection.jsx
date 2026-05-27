import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative flex h-[80vh] w-full items-center overflow-hidden bg-black px-6 text-white">

        {/*background*/}
        <div className="absolute inset-0">

            <Image 
                src="/imgs/hero_image2.png"
                fill
                alt="reflector"
                priority
                sizes="100vw"
                className="object-cover object-center scale-120 brightness-120"
            />

        </div>

        {/*content*/}
        <div className="relative z-3 flex w-[50%] flex-col gap-5 md:translate-x-90 md:w-[60%]">

            <span className="w-fit rounded-full border border-black/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white backdrop-blur-md">
                Streaming Platform
            </span>

            <h1 className="text-6xl leading-none text-black md:text-7xl">
                Movies
                <br />
                & Series
            </h1>

            <p className="max-w-xs text-sm leading-relaxed text-black">
                All your favourite movies and series in one place.
                Explore trending releases and timeless classics.
            </p>

        </div>

    </section>
  )
}

export default HeroSection