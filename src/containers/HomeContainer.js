import React from 'react'
import Tendencias from '@/components/Tendencias'
import Populares from '@/components/Populares'
import MejorPuntuadas from '@/components/MejorPuntuadas'
import Cartelera from '@/components/Cartelera'
import ProximosEstrenos from '@/components/ProximosEstrenos'

const HomeContainer = () => {
  return (
    <div className='flex flex-col gap-5 items-center w-full'>
        
        HomeContainer

        <Tendencias />

        <Populares />

        <MejorPuntuadas />

        <Cartelera />

        <ProximosEstrenos />

    </div>
    
  )
}

export default HomeContainer