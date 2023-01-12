import React from 'react'
import { outwardArrow, selectedRadio, unselectedRadio, idCompany1, idCompany2, idCompany3, exploreImage } from '../assets'


const Explore = () => {
  return (
    <div className='px-[16px] sm:px-[80px] flex sm:flex-row flex-col mb-[200px] gap-[40px]'>
      <div className="flex flex-col items-center sm:items-start">
        <h3 className='text-dimBlack font-bold sm:text-start text-center sm:text-[48px] text-[32px]'>
          Explore core products
        </h3>
        <div className="flex sm:justify-start justify-center items-center gap-4 text-primary mt-[24px] mb-[40px]">
          <p className='font-bold'>See all products</p>
          <img src={outwardArrow} alt="" />
        </div>
        <div className="flex sm:justify-start justify-center flex-col text-dimmerBlack gap-[16px]">
          <div className="flex items-center gap-2">
            <img src={selectedRadio} alt="" />
            <p className='font-medium'>Identity</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={unselectedRadio} alt="" />
            <p className='font-medium'>Income</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={unselectedRadio} alt="" />
            <p className='font-medium'>Payments</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={unselectedRadio} alt="" />
            <p className='font-medium'>Balance</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={unselectedRadio} alt="" />
            <p className='font-medium'>Authentication</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={unselectedRadio} alt="" />
            <p className='font-medium'>Transactions</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#F4F6F8] pt-[40px] px-[24px] sm:px-[40px] rounded-[30px]">
        <p className="font-bold text-dimmerBlack">
          IDENTITY
        </p>
        <h3 className='text-dimBlack sm:text-[48px] text-[32px]'>
          Speed up your onboarding
        </h3>
        <p className="font-normal text-dimmerBlack mb-[40px]">
          Reliably sign up your prospects with their kyc profile from any financial institution in seconds
        </p>
        <div className='border-b-2 border-[#DFE2E6] pb-[30px] mb-[30px]'>
          <button className="btn1">
            Learn More
          </button>
        </div>
        <div className="flex sm:flex-row flex-col gap-8 sm:gap-0 items-center justify-between">
          <p className="font-normal text-dimmerBlack sm:text-start text-center">
            Companies building with Identity
          </p>
          <div className="flex items-center justify-end gap-[0px] sm:gap-[40px]">
            <img src={idCompany1} alt="" className='h-[24px]' />
            <img src={idCompany2} alt="" className='h-[24px]' />
            <img src={idCompany3} alt="" className='h-[24px]' />
          </div>
        </div>
        <div className="flex justify-center mt-[40px] px-[80px]">
          <img src={exploreImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Explore