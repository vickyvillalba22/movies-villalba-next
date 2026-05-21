import React from 'react'
import DetailContainer from '@/containers/DetailContainer'

const page = async ({params}) => {

    const { id } = await params

    console.log(id);
    

  return (
    <DetailContainer id={id} />
  )
}

export default page