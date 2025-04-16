import React from "react";
// icons
import { AiOutlineShop } from "react-icons/ai";
import { CiDollar } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { FaSackDollar } from "react-icons/fa6";
// Cards
const card = [
  {
    icon: <AiOutlineShop />,
    title: "Sallers active our site",
    price: "10.5k",
  },
  {
    icon: <CiDollar />,
    title: "Sallers active our site",
    price: "33k",
  },
  {
    icon: <FiShoppingBag />,
    title: "Customer active in our site",
    price: "45.5k",
  },
  {
    icon: <FaSackDollar />,
    title: "Anual gross sale in our site",
    price: "25k",
  },
];

const AboutBadges = () => {
  return (
    <div className="my-[80px]">
      <ul className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        {card.map((item, index) => (
          <li key={index} className="group font-poppins">
            <div className="flex flex-col items-center justify-center gap-2 border rounded py-6 border-[#0000004D] group-hover:bg-[#DB4444] group-active:bg-[#DB4444] group-active:border-none group-active:shadow-xl  group-hover:border-none group-hover:shadow-xl transition-all duration-300">
              {/* icon */}
              <div className="bg-[#2f2e3070] group-hover:bg-[#ffffff7a] group-active:bg-[#ffffff7a] p-2 rounded-full">
                <div className="rounded-full text-3xl bg-[#000000] group-hover:bg-white group-active:bg-white text-white group-hover:text-[#000000] group-active:text-black p-2">
                  {item.icon}
                </div>
              </div>
              {/* value */}
              <p className="text-3xl font-semibold group-hover:text-white group-active:text-white">
                {item.price}
              </p>
              {/* title */}
              <h4 className="group-hover:text-white group-active:text-white">{item.title}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutBadges;
