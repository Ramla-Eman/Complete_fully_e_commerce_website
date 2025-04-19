import React from "react";
// icons
import { CiMobile4, CiCamera, CiHeadphones } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { TbDeviceWatch } from "react-icons/tb";
import { LuGamepad } from "react-icons/lu";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
// cards
const card = [
  {
    icon: <CiMobile4 />,
    title: "Phones",
  },
  {
    icon: <RiComputerLine />,
    title: "Computers",
  },
  {
    icon: <TbDeviceWatch />,
    title: "StopWatch",
  },
  {
    icon: <CiCamera />,
    title: "Camera",
  },
  {
    icon: <CiHeadphones />,
    title: "HeadPhones",
  },
  {
    icon: <LuGamepad />,
    title: "Gaming",
  },
];

const Categories = () => {
  return (
    <div className="my-16">
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <div className="bg-[#DB4444] w-4 h-8 rounded"></div>
          <p className="text-[#DB4444]">Categories</p>
        </div>
        <h4 className="text-3xl font-semibold font-inter">
          Browse By Category
        </h4>
      </div>
      {/* previous and next */}
      <div className="my-6">
        <div className="flex items-center justify-end gap-4">
          {/* previous */}
          <div className="group">
            <div className="bg-[#f5f5f5] group-hover:bg-[#00000063] group-active:bg-[#00000063] text-black group-hover:text-white group-active:text-white w-10 h-10 rounded-full flex items-center justify-center">
              <IoIosArrowRoundBack className="text-4xl"/>
            </div>
          </div>
          {/* next */}
          <div className="group">
            <div className="bg-[#f5f5f5] group-hover:bg-[#00000063] group-active:bg-[#00000063] text-black group-hover:text-white group-active:text-white w-10 h-10 rounded-full flex items-center justify-center">
              <IoIosArrowRoundForward className="text-4xl"/>
            </div>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="mt-10 overflow-x-hidden">
        <ul className="flex items-center sm:justify-between justify-center flex-wrap gap-8">
          {card.map((item, index) => (
            <li key={index} className="font-poppins group">
              <div className="flex flex-col items-center justify-center gap-3 rounded border group-hover:border-0 group-active:border-0 group-hover:bg-[#DB4444] group-active:bg-[#DB4444] group-hover:shadow-xl group-active:shadow-xl transition-all duration-300 w-[170px] h-[145px] text-black group-hover:text-white group-active:text-white">
                {/* icon */}
                <div className="text-5xl">{item.icon}</div>
                {/* value */}
                <p className="text-[16px] text-center">{item.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
