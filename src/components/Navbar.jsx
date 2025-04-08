import React from 'react'
import { Link } from 'react-router-dom'
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

// links
const links=[
  {
    title:"Home",
    url:"/"
  },
  {
    title:"Contact",
    url:"/contact"
  },
  {
    title:"About",
    url:"/about"
  },
  {
    title:"Sign Up",
    url:"/signup"
  }
]

const Navbar = () => {
  return (
    <div className='border-b-2 border-[#F5F5F5] py-5'>
      <div className='flex justify-between items-center mx-auto max-w-6xl pt-6'>
        <div>
          <h1 className='text-2xl font-bold font-inter'>Exclusive</h1>
        </div>
        <div>
          <ul className='flex gap-4'>
            {
              links.map((link,index)=>(
                <li key={index} className='text-[16px] font-poppins'>
                  <Link to={link.url}>{link.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='flex gap-4'>
          <div className='relative bg-[#F5F5F5] rounded py-2 px-2 w-[243px]'>
            <input type="text" placeholder='What are you looking for?' className='outline-0 w-full'/>
            <FiSearch className='absolute right-2 top-2 text-xl'/>
          </div>
          <div className='flex items-center justify-center gap-2 text-2xl'>
            <GoHeart/>
            <IoCartOutline/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar