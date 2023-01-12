import React from 'react'
import { businessIcon1, businessIcon2, businessIcon3, businessIcon4, businessIcon5, } from '../assets'

const Business = () => {
  return (
    <div className='bg-[#F4F6F8] px-[16px] py-[80px] sm:p-[80px]'>
      <h3>How Okra powers businesses</h3>
      <p className="font-normal mt-[24px]">
        A single API for multiple use cases across industries.
      </p>
      <div className="flex gap-[24px] flex-wrap  items-center sm:justify-start justify-center mt-[60px]">
        <div className="flex flex-col bg-white p-[40px] rounded-[8px] text-dimmerBlack font-medium w-[380px]">
          <img src={businessIcon1} alt="" className='w-[50px] h-[50px]' />
          <h5 className='mt-[80px]'>LENDING</h5>
          <h4 className="text-black my-[24px]">
            Give Out loans confidently
          </h4>
          <p>
            Match customers with sustainable loans in real-time, and lower your default rates.
          </p>
        </div>
        <div className="flex flex-col bg-white p-[40px] rounded-[8px] text-dimmerBlack font-medium w-[380px]">
          <img src={businessIcon2} alt="" className='w-[50px] h-[50px]' />
          <h5 className='mt-[80px]'>LENDING</h5>
          <h4 className="text-black my-[24px]">
            Give Out loans confidently
          </h4>
          <p>
            Match customers with sustainable loans in real-time, and lower your default rates.
          </p>
        </div>
        <div className="flex flex-col bg-white p-[40px] rounded-[8px] text-dimmerBlack font-medium w-[380px]">
          <img src={businessIcon3} alt="" className='w-[50px] h-[50px]' />
          <h5 className='mt-[80px]'>LENDING</h5>
          <h4 className="text-black my-[24px]">
            Give Out loans confidently
          </h4>
          <p>
            Match customers with sustainable loans in real-time, and lower your default rates.
          </p>
        </div>
        <div className="flex flex-col bg-white p-[40px] rounded-[8px] text-dimmerBlack font-medium w-[380px]">
          <img src={businessIcon4} alt="" className='w-[50px] h-[50px]' />
          <h5 className='mt-[80px]'>LENDING</h5>
          <h4 className="text-black my-[24px]">
            Give Out loans confidently
          </h4>
          <p>
            Match customers with sustainable loans in real-time, and lower your default rates.
          </p>
        </div>
        <div className="flex flex-col bg-white p-[40px] rounded-[8px] text-dimmerBlack font-medium w-[380px]">
          <img src={businessIcon5} alt="" className='w-[50px] h-[50px]' />
          <h5 className='mt-[80px]'>LENDING</h5>
          <h4 className="text-black my-[24px]">
            Give Out loans confidently
          </h4>
          <p>
            Match customers with sustainable loans in real-time, and lower your default rates.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Business