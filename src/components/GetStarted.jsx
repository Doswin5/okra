import React from 'react'
import { getStartedImage } from '../assets'

const GetStarted = () => {
  return (
    <div className='sm:px-[80px] px-[16px] my-[100px]'>
      <img src={getStartedImage} alt="" className='w-full' />
    </div>
  )
}

export default GetStarted