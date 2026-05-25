'use client'

import React from 'react'
import { Icon } from '@iconify/react'

import { useAppContext } from '@/contexts/AppContext'

const Header = () => {

  const { mode, setMode } = useAppContext()

  return (

    <header className='w-full h-[10vh] flex justify-center mb-5 sticky top-0 z-4 bg-background'>

      <div className='w-[90%] flex justify-between items-center'>

          <Icon icon="hugeicons:camera-video" className='text-3xl' />

          <div className='flex gap-6'>
              <button onClick={()=>setMode('movies')}>
                Movies
              </button>
              <button onClick={()=>setMode('series')}>
                Series
              </button>
          </div>

      </div>
        
    </header>

  )

}

export default Header