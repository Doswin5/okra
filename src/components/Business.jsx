import React from 'react'
import { businessIcon1, businessIcon2, businessIcon3, businessIcon4, businessIcon5, } from '../assets'
import { motion } from 'framer-motion'

const Business = () => {

  const boxVariant = {
    hidden: {
      
    },
    visible: {
      
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        // staggerChildren: 1
      }
    }
  }

  const listVariant = {
    hidden: {
      y: '40px',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        // duration: 1,
        delay: 1
      }
    }
  }

  return (
    <div className='bg-[#F4F6F8] px-[16px] py-[80px] sm:p-[80px]'>
      <h3 className='sm:text-[48px] text-[32px]'>How Okra powers businesses</h3>
      <p className="font-normal mt-[24px]">
        A single API for multiple use cases across industries.
      </p>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center sm:justify-start justify-center mt-[60px]"
        variants={boxVariant}
        whileInView='visible'
        initial='hidden'
      >
        <motion.div 
          className="flex flex-col bg-white p-[40px] rounded-[8px] text-dimmerBlack font-medium w-full"
          variants={listVariant}
        >
          <img src={businessIcon1} alt="" className='w-[50px] h-[50px]' />
          <h5 className='mt-[80px]'>LENDING</h5>
          <h4 className="text-black my-[24px]">
            Give Out loans confidently
          </h4>
          <p>
            Match customers with sustainable loans in real-time, and lower your default rates.
          </p>
        </motion.div>
        <motion.div 
          className="flex flex-col bg-white p-[40px] rounded-[8px] text-dimmerBlack font-medium w-full"
          variants={listVariant}
        >
          <img src={businessIcon2} alt="" className='w-[50px] h-[50px]' />
          <h5 className='mt-[80px]'>LENDING</h5>
          <h4 className="text-black my-[24px]">
            Give Out loans confidently
          </h4>
          <p>
            Match customers with sustainable loans in real-time, and lower your default rates.
          </p>
        </motion.div>
        <motion.div 
          className="flex flex-col bg-white p-[40px] rounded-[8px] text-dimmerBlack font-medium w-full"
          variants={listVariant}
        >
          <img src={businessIcon3} alt="" className='w-[50px] h-[50px]' />
          <h5 className='mt-[80px]'>LENDING</h5>
          <h4 className="text-black my-[24px]">
            Give Out loans confidently
          </h4>
          <p>
            Match customers with sustainable loans in real-time, and lower your default rates.
          </p>
        </motion.div>
        <motion.div 
          className="flex flex-col bg-white p-[40px] rounded-[8px] text-dimmerBlack font-medium w-full"
          variants={listVariant}
        >
          <img src={businessIcon4} alt="" className='w-[50px] h-[50px]' />
          <h5 className='mt-[80px]'>LENDING</h5>
          <h4 className="text-black my-[24px]">
            Give Out loans confidently
          </h4>
          <p>
            Match customers with sustainable loans in real-time, and lower your default rates.
          </p>
        </motion.div>
        <motion.div 
          className="flex flex-col bg-white p-[40px] rounded-[8px] text-dimmerBlack font-medium w-full"
          variants={listVariant}
        >
          <img src={businessIcon5} alt="" className='w-[50px] h-[50px]' />
          <h5 className='mt-[80px]'>LENDING</h5>
          <h4 className="text-black my-[24px]">
            Give Out loans confidently
          </h4>
          <p>
            Match customers with sustainable loans in real-time, and lower your default rates.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Business