import React from 'react'
import DetailContainer from '@/containers/DetailContainer'

const page = async ({params}) => {

    const { id, type } = await params

    console.log(id);

  return (
    <DetailContainer id={id} type={type} />
  )
}

export default page