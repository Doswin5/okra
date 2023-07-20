import React from 'react'
import { HeroSection, Trustees, Explore, Business, Finance, Coverage, Build, GetStarted } from '../components'

const HomePage = () => {
  return (
    <div className='sm:pt-[100px] pt-[40px]'>
      <HeroSection />
      <Trustees />
      <Explore />
      <Business />
      <Finance />
      <Coverage />
      <Build />
      <GetStarted />

    </div>
  )
}

export default HomePage