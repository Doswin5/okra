import React from 'react'
import { buildImage } from '../assets'

const Build = () => {
  return (
    <div>
      <img src={buildImage} alt="" className='w-full' />
    </div>
  )
}

export default Build