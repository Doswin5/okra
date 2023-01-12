import React from 'react'
import { coverageImage } from '../assets'

const Coverage = () => {
  return (
    <div className='bg-[white] px-[16px] sm:px-[80px] py-[80px] sm:py-[160px] flex sm:flex-row flex-col justify-between text-dimmerBlack items-center gap-[100px]'>
      <div>
        <h3 className='text-black'>
          The largest API coverage across financial institutions in Africa
        </h3>
        <h4 className='mt-[16px] mb-[40px] 
         font-light'>
          Get financial information from all banks and other financial institutions in Nigeria. Currently in beta for Kenya and South Africa.
        </h4>
        <button className="btn1">Explore Okra docs</button>
      </div>
      <img src={coverageImage} alt="" className='w-[400px]' />
    </div>
  )
}

export default Coverage