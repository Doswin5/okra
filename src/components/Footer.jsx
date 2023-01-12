import React from 'react'
import { okraLogo } from '../assets'

const Footer = () => {
  return (
    <div className='flex sm:flex-row flex-col px-[16px] sm:px-[80px] my-[40px] sm:my-[150px] justify-between text-dimmerBlack items-center sm:items-start sm:text-start text-center'>
      <img src={okraLogo} alt="" className='mt-[40px] sm:mb-0 mb-[40px]' />
      <div className="flex flex-col sm:mb-0 mb-[40px]">
        <p className="font-bold mb-[24px] sm:mb-[40px] text-black">
          Products
        </p>
        <div className="flex flex-col gap-[8px] sm:gap-[24px]">
          <p className="font-normal">Authentication</p>
          <p className="font-normal">Balance</p>
          <p className="font-normal">Transactions</p>
          <p className="font-normal">Payments</p>
          <p className="font-normal">Identity</p>
          <p className="font-normal">Income</p>
          <p className="font-normal">Links</p>
          <p className="font-normal">Selfie Verification</p>
          <p className="font-normal">Guarantors</p>
          <p className="font-normal">Spending Patterns</p>
          <p className="font-normal">Revenue</p>
          <p className="font-normal">Pricing</p>
          <p className="font-normal">Complete View</p>
        </div>
      </div>
      <div className="flex flex-col gap-0 sm:gap-[50px]">
        <div className="flex flex-col sm:mb-0 mb-[40px]">
          <p className="font-bold mb-[24px] sm:mb-[40px] text-black">
            Use Cases
          </p>
          <div className="flex flex-col gap-[8px] sm:gap-[24px]">
            <p className="font-normal">Authentication</p>
            <p className="font-normal">Balance</p>
            <p className="font-normal">Transactions</p>
            <p className="font-normal">Payments</p>
            <p className="font-normal">Identity</p>
          </div>
        </div>
        <div className="flex flex-col sm:mb-0 mb-[40px]">
          <p className="font-bold mb-[24px] sm:mb-[40px] text-black">
            Developers
          </p>
          <div className="flex flex-col gap-[8px] sm:gap-[24px]">
            <p className="font-normal">Authentication</p>
            <p className="font-normal">Balance</p>
            <p className="font-normal">Transactions</p>
            <p className="font-normal">Payments</p>
            <p className="font-normal">Identity</p>
            <p className="font-normal">Income</p>
            <p className="font-normal">Links</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-0 sm:gap-[50px]">
        <div className="flex flex-col sm:mb-0 mb-[40px]">
          <p className="font-bold mb-[24px] sm:mb-[40px] text-black">
            Company
          </p>
          <div className="flex flex-col gap-[8px] sm:gap-[24px]">
            <p className="font-normal">Authentication</p>
            <p className="font-normal">Balance</p>
            <p className="font-normal">Transactions</p>
            <p className="font-normal">Payments</p>
            <p className="font-normal">Identity</p>
          </div>
        </div>
        <div className="flex flex-col sm:mb-0 mb-[40px]">
          <p className="font-bold mb-[24px] sm:mb-[40px] text-black">
            Legal
          </p>
          <div className="flex flex-col gap-[8px] sm:gap-[24px]">
            <p className="font-normal">Authentication</p>
            <p className="font-normal">Balance</p>
            <p className="font-normal">Transactions</p>
            <p className="font-normal">Payments</p>
            <p className="font-normal">Identity</p>
            <p className="font-normal">Income</p>
            <p className="font-normal">Links</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer