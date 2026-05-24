import React from 'react'

import HeroSection from '@/components/HeroSection'
import SectionGallery from '@/components/SectionGallery'
import { sections } from '@/utils/endpoints'

const HomeContainer = () => {

  return (

    <div className='flex w-full flex-col gap-10 items-center'>

        <HeroSection />

        {sections.map((section, index)=>(

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