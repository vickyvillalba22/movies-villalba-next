'use client'

import React from 'react'
import { Icon } from '@iconify/react'

import { useAppContext } from '@/contexts/AppContext'
import Link from 'next/link'

const Header = () => {

  const { mode, setMode } = useAppContext()

  return (

    <header className='w-full h-[10vh] flex justify-center mb-5 sticky top-0 z-4 bg-background'>

      <div className='w-[90%] flex justify-between items-center'>

        <Link href='/'>
          <Icon icon="hugeicons:camera-video" className='text-3xl' />
        </Link>
          

          <div className='flex gap-6'>
              <button 
                onClick={()=>setMode('movies')}
                className={`
                  text-sm font-medium transition-all duration-300
                  hover:text-zinc-300
                  ${mode === 'movies'
                      ? 'text-white underline underline-offset-8'
                      : 'text-zinc-500'
                  }
              `}
              >
                Movies
              </button>
              <button 
                onClick={()=>setMode('series')}
                className={`
                  text-sm font-medium transition-all duration-300
                  hover:text-zinc-300
                  ${mode === 'series'
                      ? 'text-white underline underline-offset-8'
                      : 'text-zinc-500'
                  }
              `}
              >
                Series
              </button>
          </div>

      </div>
        
    </header>

  )

}

export default Header