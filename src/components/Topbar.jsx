import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className='bg-black'>
      <div className='md:flex justify-end items-center lg:gap-[231px] gap-[70px] hidden p-4 mx-auto max-w-7xl text-[#FAFAFA] font-poppins'>
        <div className='flex items-center justify-center gap-2 text-sm'>
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <span className='border-b font-semibold'>ShopNow</span>
        </div>
        <div className='flex gap-1 items-center justify-center text-sm'>
          <p>English</p>
          <RiArrowDropDownLine size={30}/>
        </div>
      </div>
    </div>
  )
}

export default Topbar