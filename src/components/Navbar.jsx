import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import SearchBar from "./ui/SearchBar";

// links
const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Sign Up",
    url: "/signup",
  },
];

const Navbar = () => {
  // menu
  const [rightToggle, setRightToggle] = useState(true);
  const handleToggle = () => {
    setRightToggle(!rightToggle);
  };
  const closeMenu = () => {
    setRightToggle(!rightToggle);
  };

  return (
    <div className="border-b-2 border-[#F5F5F5]">
      <div className="flex justify-between items-center mx-auto max-w-7xl pt-6 px-6 py-5">
        <div className="flex gap-4">
          <div
            className="md:hidden flex transition-all duration-300"
            onClick={handleToggle}
          >
            {rightToggle ? <HiMenuAlt2 size={35} /> : <IoMdClose size={35} />}
          </div>
          <h1 className="text-2xl font-bold font-inter">Exclusive</h1>
        </div>
        <div
          className={`flex items-center justify-center md:w-auto w-full z-50 md:static absolute top-20 left-0 ${
            rightToggle ? "-translate-x-full md:translate-0 -right-full" : "translate-x-0 left-0"
          } bg-white md:h-auto h-screen transition-transform duration-300`}
        >
          <ul className="flex md:flex-row flex-col justify-center items-center gap-8 md:gap-4">
            {links.map((link, index) => (
              <li
                key={index}
                className="md:text-[16px] text-2xl font-poppins text-black"
                onClick={closeMenu}
              >
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          <SearchBar/>
          <div className="flex items-center justify-center gap-2 text-2xl">
            <GoHeart />
            <IoCartOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
