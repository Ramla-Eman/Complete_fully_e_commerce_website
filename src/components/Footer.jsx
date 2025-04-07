import React from "react";
// import img
import Img1 from "../assets/Frame 719.png";
// icons
import { MdOutlineCopyright } from "react-icons/md";
import {
  RiFacebookLine,
  RiTwitterLine,
  RiInstagramLine,
  RiLinkedinLine,
} from "react-icons/ri";
import { VscSend } from "react-icons/vsc";
// links map
const list1 = [
  {
    title: "Address",
  },
  {
    title: "exclusive@gmail.com",
  },
  {
    title: "+88015-88888-9999",
  },
];
const list2 = [
  {
    title: "My Account",
  },
  {
    title: "Login / Register",
  },
  {
    title: "Cart",
  },
  {
    title: "Wishlist",
  },
  {
    title: "Shop",
  },
];
const list3 = [
  {
    title: "Privacy Policy",
  },
  {
    title: "Terms Of Use",
  },
  {
    title: "FAQ",
  },
  {
    title: "Contact",
  },
];

const Footer = () => {
  return (
    <div className="bg-black text-white py-5">
      <div className="flex flex-col items-center justify-center gap-6 font-poppins">
        <div className="w-full flex md:flex-row flex-col md:items-start flex-wrap px-3 justify-evenly py-8 gap-5">
          <div className="flex flex-col gap-4 md:items-start items-center">
            <h2 className="font-bold text-2xl font-inter">Exclusive</h2>
            <h4 className="text-xl font-semibold">Subscribe</h4>
            <p className="text-[16px]">Get 10% off on your first order</p>
            <div className="relative border rounded py-2 px-2 text-xl">
              <input type="text" placeholder="Enter your email" className="outline-0"/>
              <VscSend className="absolute right-2 top-3"/>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:items-start items-center">
            <h4 className="text-xl font-semibold">Support</h4>
            {list1.map((item, index) => (
              <ul key={index}>
                <li className="text-[16px]">{item.title}</li>
              </ul>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:items-start items-center">
            <h4 className="text-xl font-semibold">Account</h4>
            {list2.map((item, index) => (
              <ul key={index}>
                <li className="text-[16px]">{item.title}</li>
              </ul>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:items-start items-center">
            <h4 className="text-xl font-semibold">Quick Link</h4>
            {list3.map((item, index) => (
              <ul key={index}>
                <li className="text-[16px]">{item.title}</li>
              </ul>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:items-start items-center">
            <h4 className="text-xl font-semibold">Download App</h4>
            <p className="text-[16px]">Save $3 with app New User Only</p>
            <img src={Img1} alt="" />
            <div className="flex items-center gap-3 text-2xl">
              <RiFacebookLine />
              <RiTwitterLine />
              <RiInstagramLine />
              <RiLinkedinLine />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-1 text-[16px] border-t pt-5 px-5">
          <MdOutlineCopyright className="sm:block hidden"/>
          <p className="text-center">Copyright Software Synergy Team 2025. All right reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
