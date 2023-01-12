import React from 'react'
import { financeImage } from '../assets'

const Finance = () => {
  return (
    <div className='bg-[#222C3B] px-[16px] sm:px-[80px] py-[80px] sm:py-[160px] flex sm:flex-row flex-col-reverse justify-between text-white items-center gap-[80px]'>
      <div>
        <h3>One API for all financial data</h3>
        <h4 className='mt-[16px] mb-[40px] 
         font-light'>
          Implement any of all of okra’s products with just a few lines of code in any language.
        </h4>
        <button className="btn1">Explore Okra docs</button>
      </div>
      <img src={financeImage} alt="" className='w-[400px]' />
    </div>
  )
}

export default Finance