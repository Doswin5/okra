import React from 'react'
import { absa, firstBank, paystack, zenith } from '../assets'
import { motion } from 'framer-motion'

const Coverage = () => {
  return (
    <div className='bg-[white] px-[16px] sm:px-[80px] py-[80px] sm:py-[160px] flex sm:flex-row flex-col justify-between text-dimmerBlack items-center gap-[100px]'>
      <div>
        <motion.h3 
          className='text-black sm:text-[48px] text-[32px]'
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              type: 'tween',
              delay: 0.5
            }
          }}
        >
          The largest API coverage across financial institutions in Africa
        </motion.h3>
        <motion.h4 
          className='mt-[16px] mb-[40px] 
         font-light'
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              type: 'tween',
              delay: 0.5
            }
          }}
        >
          Get financial information from all banks and other financial institutions in Nigeria. Currently in beta for Kenya and South Africa.
        </motion.h4>
        <button className="btn1 hover:bg-green-900">Explore Okra docs</button>
      </div>
      <div className="grid grid-cols-2 gap-24">
        <motion.img 
          src={paystack} 
          alt="" 
          className='sm:w-[120px] w-[40px]' 
          animate={{
            scale: [3, 1, 3, 1],
            transition: {
              duration: 10,
              delay: 10,
              repeat: Infinity,
            }
          }} 
        />
        <motion.img 
          src={firstBank} 
          alt="" 
          className='sm:w-[120px] w-[40px]'
          animate={{
            scale: [1, 3, 1, 3],
            transition: {
              duration: 10,
              delay: 10,
              repeat: Infinity,
            }
          }} 
        />
        <motion.img 
          src={absa} 
          alt="" 
          className='sm:w-[120px] w-[40px]' 
          animate={{
            scale: [1, 3, 1, 3],
            transition: {
              duration: 10,
              delay: 10,
              repeat: Infinity,
            }
          }} 
        />
        <motion.img 
          src={zenith} 
          alt="" 
          className='sm:w-[120px] w-[40px]'
          animate={{
            scale: [3, 1, 3, 1],
            transition: {
              duration: 10,
              delay: 10,
              repeat: Infinity,
            }
          }}   
        />
      </div>
    </div>
  )
}

export default Coverage