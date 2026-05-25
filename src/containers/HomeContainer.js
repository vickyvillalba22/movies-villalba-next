'use client'

import React, { useState } from 'react'

import HeroSection from '@/components/HeroSection'
import SectionGallery from '@/components/SectionGallery'
import { movies, series } from '@/utils/endpoints'
import { useAppContext } from '@/contexts/AppContext'

const HomeContainer = () => {

  const { mode } = useAppContext()

  const currentSections = mode === 'movies' ? movies : series 

  return (

    <div className='flex w-full flex-col gap-10 items-center'>

        <HeroSection />

        {currentSections.map((section, index) => (

            <SectionGallery
                key={index}
                title={section.title}
                endpoint={section.endpoint}
            />

        ))}



    </div>
    
  )
}

export default HomeContainer