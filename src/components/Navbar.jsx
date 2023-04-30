import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { okraLogo, dropdown, menu, close } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='flex justify-between items-center py-[16px] sm:py-[24px] px-[16px] sm:px-[80px] fixed left-0 right-0 bg-white z-50'>
      <Link to='/'>
        <img src={okraLogo} alt="okra logo" className='w-[112px]' />
      </Link>
      <div className="sm:flex hidden justify-end gap-[60px]">
        <div className="flex items-center gap-[40px] ">
          {
            navLinks.map(navLink => (
              <Link className='group/item flex items-center gap-[16px] hover:text-primary h-full py-auto'>
                {navLink.linkName} 
                <img src={dropdown} alt="" className='w-[16px] h-[16px] group-hover/item:rotate-180 transition-transform duration-500' />
                <div className="invisible hover:visible flex fixed top-[64px] w-full left-0 right-0 bg-white group-hover/item:visible z-50 shadow-xl">
                  <div className="w-[72%] h-full pl-[80px] pr-6 py-16">
                    <p className="text-xl font-medium text-primary border-b border-[#858585] pb-6">
                      {navLink.linkName}
                    </p>
                    <div className="grid grid-cols-3 mt-8 gap-6">
                      {
                        navLink.sublinks.map(sublink => (
                          <div className="flex flex-col gap-2 hover:bg-gray-100 p-2 rounded-sm">
                            <p className="text-xl font-medium text-dimBlack ">
                              {sublink.sublinkTitle}
                            </p>
                            <p className="text-lg text-[#797575]">
                              {sublink.sublinkDescription}
                            </p>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                  <div className="h-full px-6 py-16">
                    <p className="text-xl font-medium text-primary pb-6">
                      Feature Outcome Story
                    </p>
                    <div className="flex flex-col gap-2 mt-8">
                      <p className="text-xl font-medium text-dimBlack ">
                        Landing
                      </p>
                      <p className="text-lg text-[#797575]">
                        Making Payments conveniently
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
        <div className="flex items-center gap-[40px]">
          <Link className='hover:text-primary'>Login</Link>
          <button className="btn1 hover:bg-green-900">
            Sign Up
          </button>
        </div>
      </div>

      <div className="flex sm:hidden items-center" >
        <img
          src={toggle ? close : menu}
          alt="menu"
          className='w-[24px] h-[24px] cursor-pointer object-cover'
          onClick={() => setToggle(prev => !prev)}
        />
        <div
          className={`${toggle ? 'flex' : 'hidden'} justify-center pt-6 px-6 bg-black text-white absolute top-20 right-0 mx-4 my-2 min-w-[60px] rounded-xl sidebar`}
        >
          <ul
            className="list-none items-center flex flex-col gap-[24px] pb-[24px]"
          >
            {
              navLinks.map((navLink, id) => (
                navLink.linkName === 'Study' ? <Link className='flex items-center gap-2 text-[#9C9B9B]'>{navLink.linkName} <img src={dropdown} alt="dropdown" /> </Link> : <Link>
                {navLink.linkName}
                </Link>
              ))
            }
            <div className="flex sm:flex-row flex-col items-center gap-[24px] sm:gap-[40px]">
              <Link>Login</Link>
              <button className="btn1">
                Sign Up
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar