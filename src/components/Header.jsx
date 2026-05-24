import React from 'react'
import { Icon } from '@iconify/react'

const Header = () => {
  return (

    <header className='w-full h-[10vh] flex justify-center mb-5'>

    <div className='w-[95%] flex justify-between items-center'>

        <Icon icon="hugeicons:camera-video" className='text-3xl' />

        <div className='flex gap-6'>
            <p>Movies</p>
            <p>Series</p>
        </div>

    </div>
        
    </header>

  )
}

export default Header