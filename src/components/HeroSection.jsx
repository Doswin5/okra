import React from 'react'
import { heroSectionImage } from '../assets'

const HeroSection = () => {
  return (
    <div className='flex sm:flex-row flex-col-reverse items-center px-[16px] gap-[40px] sm:px-[80px] py-[24px] sm:py-[40px]'>
      <div className="flex flex-col">
        <h2 className="font-bold text-dimBlack">
          The fastest way to access financial data
        </h2>
        <h5 className="font-normal text-dimmerBlack w-[85%] mt-[16px] mb-[40px]">
          Access financial information from banks and more-with one Api-to build financial products. 
        </h5>
        <div className="flex gap-[24px]">
          <button className="btn1">Start for free</button>
          <button className="btn2">See demo</button>
        </div>
      </div>
      <img 
        src={heroSectionImage} 
        alt="hero section pic"
        className='sm:w-[50%] w-full' 
      />
    </div>
  )
}

export default HeroSection