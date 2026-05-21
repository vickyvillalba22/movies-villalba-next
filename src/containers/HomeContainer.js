import React from 'react'
import Tendencias from '@/components/Tendencias'
import Populares from '@/components/Populares'
import MejorPuntuadas from '@/components/MejorPuntuadas'
import Cartelera from '@/components/Cartelera'
import ProximosEstrenos from '@/components/ProximosEstrenos'

const HomeContainer = () => {

  // SE PUEDE HACER UN COMPONENTE GENERAL QUE RECIBA EL ENDPOINT A FETCHEAR
  // ARMAR ARCHIVO CON ENDPOINTS

  return (

    <div className='flex w-full flex-col gap-10 items-center'>

        <Tendencias />

        <Populares />

        <MejorPuntuadas />

        <Cartelera />

        <ProximosEstrenos />


    </div>
    
  )
}

export default HomeContainer