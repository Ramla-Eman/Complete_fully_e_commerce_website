import React from 'react'
// img
import Img1 from '../../assets/heroImg.jpeg'
// icon
import { FaApple } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const HeroBanner = () => {
  return (
    <div className='py-4 overflow-hidden'>
      <div className='bg-black flex items-center justify-between w-[892px] h-[344px] overflow-hidden'>
        <div className='text-white flex flex-col gap-6 ml-7'>
          <div className='flex items-center gap-4 font-poppins'>
            <FaApple size={60} />
            <p>iPhone 14 Series</p>
          </div>
          <div className='font-inter text-5xl '>
            <p>Up to 10% <br className='md:hidden block'/> off Voucher</p>
          </div>
          <div className='flex gap-4 text-2xl'>
            <p className='underline'>Shop Now</p>
            <IoIosArrowRoundForward size={40} />
          </div>
        </div>
        <div className='w-[496px]'>
          <img src={Img1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeroBanner