import React from 'react'
import { heroSectionImage } from '../assets'
import { motion } from 'framer-motion'

const HeroSection = () => {

  const boxVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    }
  }

  const listVariant = {
    hidden: {
      y: '24px',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.5,
      }
    }
  }

  return (
    <div className='flex sm:flex-row flex-col-reverse items-center px-[16px] gap-[40px] sm:px-[80px] py-[24px] sm:py-[40px]'>
      <div className="flex flex-col">
        <motion.div
          variants={boxVariant}
          whileInView='visible'
          initial='hidden'
        >
          <motion.h2 
            className="font-bold text-dimBlack sm:text-[64px] text-[40px]"
            variants={listVariant}
          >
            The fastest way to access financial data
          </motion.h2>
          <motion.h5 
            className="font-normal text-dimmerBlack sm:w-[85%] w-full mt-[16px] mb-[40px]"
            variants={listVariant}
          >
            Access financial information from banks and more-with one Api-to build financial products. 
          </motion.h5>
        </motion.div>
        <div className="flex gap-[24px]">
          <button className="btn1 hover:bg-green-900">Start for free</button>
          <button className="btn2 hover:bg-primary hover:text-white hover:outline-none">See demo</button>
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