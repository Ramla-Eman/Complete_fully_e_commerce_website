import React from 'react'
// icons
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
// Cards
const card = [
  {
    icon: <FaTruckFast />,
    title: "FREE AND FAST DELIVERY",
    pretitle: "Free delivery for all orders over $140",
  },
  {
    icon: <MdOutlineHeadsetMic />,
    title: "24/7 CUSTOMER SERVICE",
    pretitle: "Friendly 24/7 customer support",
  },
  {
    icon: <GoShieldCheck />,
    title: "MONEY BACK GUARANTEE",
    pretitle: "We reurn money within 30 days",
  },
];

const ServicesBagdges = () => {
  return (
    <div className="my-[80px]">
      <ul className="flex items-center justify-center flex-wrap gap-8">
        {card.map((item, index) => (
          <li key={index} className="group font-poppins">
            <div className="flex flex-col items-center justify-center gap-2 rounded py-6 px-3 group-hover:bg-[#DB4444] group-active:bg-[#DB4444] group-active:shadow-xl group-hover:shadow-xl transition-all duration-300">
              {/* icon */}
              <div className="bg-[#2f2e3070] group-hover:bg-[#ffffff7a] group-active:bg-[#ffffff7a] p-2 rounded-full">
                <div className="rounded-full text-3xl bg-[#000000] group-hover:bg-white group-active:bg-white text-white group-hover:text-[#000000] group-active:text-black p-2">
                  {item.icon}
                </div>
              </div>
              {/* value */}
              <p className="sm:text-2xl text-xl font-semibold text-center group-hover:text-white group-active:text-white">
                {item.title}
              </p>
              {/* title */}
              <h4 className="group-hover:text-white text-center group-active:text-white">{item.pretitle}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServicesBagdges