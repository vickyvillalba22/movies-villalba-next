import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div className='border-red-400 border p-4'>
        <p>{message}</p>
    </div>
  )
}

export default ErrorMessage