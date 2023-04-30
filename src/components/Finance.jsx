import React from 'react'
import { financeImage } from '../assets'
import { motion } from 'framer-motion'


const Finance = () => {
  return (
    <div className='bg-[#222C3B] px-[16px] sm:px-[80px] py-[80px] sm:py-[160px] flex sm:flex-row flex-col-reverse justify-between text-white items-center gap-[80px]'>
      <motion.div
        initial={{
          x: -300,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            type: 'tween',
            delay: 1
          }
        }}
      >
        <h3 
          className='sm:text-[48px] text-[32px]'
        >
          One API for all financial data
        </h3>
        <h4 
          className='mt-[16px] mb-[40px] 
          font-light'
        >
          Implement any of all of okra’s products with just a few lines of code in any language.
        </h4>
        <button 
          className="btn1 hover:bg-green-900"
        >
          Explore Okra docs
        </button>
      </motion.div>
      <img src={financeImage} alt="" className='w-full sm:w-[40%]' />
    </div>
  )
}

export default Finance