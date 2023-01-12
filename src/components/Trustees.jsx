import React from 'react'
import { companies } from '../constants'

const Trustees = () => {
  return (
    <div className='mt-[100px] px-[16px] sm:px-[80px] mb-[150px]'>
      <h4 className="text-dimmerBlack mb-[40px] text-center">
        Trusted By:
      </h4>
      <div className="flex sm:flex-row flex-col justify-between items-center gap-[24px]">
        {
          companies.map(company => (
            <img src={company.companyLogo} alt="" />
          ))
        }
      </div>
    </div>
  )
}

export default Trustees