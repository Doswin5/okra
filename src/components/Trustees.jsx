import React from 'react'
import { companies } from '../constants'
import { motion } from 'framer-motion'

const Trustees = () => {

  const boxVariant = {
    hidden: {
      
    },
    visible: {
      
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  }

  const listVariant = {
    hidden: {
      x: '24px',
      opacity: 0,
      
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        // duration: 2
      }
    }
  }

  return (
    <div className='mt-[100px] px-[16px] sm:px-[80px] mb-[150px]'>
      <h4 className="text-dimmerBlack mb-[40px] text-center">
        Trusted By:
      </h4>
      <motion.div 
        className="flex sm:flex-row flex-col justify-between items-center gap-[24px]"
        variants={boxVariant}
        whileInView='visible'
        initial='hidden'
      >
        {
          companies.map(company => (
            <motion.img 
              src={company.companyLogo} 
              alt="" 
              variants={listVariant}
            />
          ))
        }
      </motion.div>
    </div>
  )
}

export default Trustees