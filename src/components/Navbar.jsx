import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { okraLogo, dropdown, menu, close } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='flex justify-between items-center py-[16px] sm:py-[24px] px-[16px] sm:px-[80px] fixed left-0 right-0 bg-white'>
      <Link to='/'>
        <img src={okraLogo} alt="okra logo" className='sm:h-[40px] h-[24px]' />
      </Link>
      <div className="sm:flex hidden justify-end gap-[60px]">
        <div className="flex items-center gap-[40px]">
          {
            navLinks.map(navLink => (
              <Link className='flex items-center gap-[16px]'>{navLink.linkName} <img src={dropdown} alt="" className='w-[16px] h-[16px]' /></Link>
            ))
          }
        </div>
        <div className="flex items-center gap-[40px]">
          <Link>Login</Link>
          <button className="btn1">
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
                navLink.linkName === 'Study' ? <Link className='flex items-center gap-2 text-[#9C9B9B]'>{navLink.linkName} <img src={dropdown} alt="dropdown" /> </Link> : <Link>{navLink.linkName}</Link>
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