import React from "react";
// images
import Image1 from "../assets/ArrivalImag1.png";
import Image2 from "../assets/ArrivalImag2.jpeg";
import Image3 from "../assets/ArrivalImag3.png";
import Image4 from "../assets/ArrivalImag4.png";
import { Link } from "react-router-dom";

const HomeFeautered = () => {
  return (
    <div className="my-16 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <div className="bg-[#DB4444] w-4 h-8 rounded"></div>
          <p className="text-[#DB4444]">Featured</p>
        </div>
        <h4 className="text-3xl font-semibold font-inter">New Arrival</h4>
      </div>
      <div className="mt-10 grid md:grid-cols-4 grid-cols-2 grid-rows-2 gap-4 text-white ">
        <div className="group relative overflow-hidden col-span-2 md:row-span-2 bg-black rounded">
          {/* overlay */}
          <div className="group-hover:bg-white/10 group-active:bg-white/10 w-full h-full absolute z-40 transition-all duration-300 "></div>
          {/* image */}
          <img
            src={Image1}
            alt=""
            className="object-cover w-full h-full z-10"
          />
          {/* title */}
          <h3 className="absolute -bottom-full left-5 group-hover:bottom-24 group-active:bottom-24 transition-all duration-300 z-50 text-2xl">
            PlayStation 5
          </h3>
          {/* pretitle */}
          <p className="absolute -bottom-full left-5 group-hover:bottom-14 group-active:bottom-14 transition-all duration-700 z-50 text-[14px]">
            Black and White version of the PS5 coming out on sale.
          </p>
          {/* link */}
          <Link className="absolute -bottom-full left-5 group-hover:bottom-8 group-active:bottom-8 transition-all duration-700 z-50 underline">
            Shop Now
          </Link>
        </div>
        <div className="group relative overflow-hidden col-span-2 md:row-span-1 bg-[#0D0D0D] rounded">
          {/* overlay */}
          <div className="group-hover:bg-white/10 group-active:bg-white/10 w-full h-full absolute z-40 transition-all duration-300 "></div>
          {/* image */}
          <img
            src={Image2}
            alt=""
            className="object-cover w-[432px] h-full transform scale-x-[-1] float-end"
          />
          {/* title */}
          <h3 className="absolute -bottom-full left-5 group-hover:bottom-24 group-active:bottom-24 transition-all duration-300 z-50 text-2xl">
            Women’s Collections
          </h3>
          {/* pretitle */}
          <p className="absolute -bottom-full left-5 group-hover:bottom-14 group-active:bottom-14 transition-all duration-700 z-50 text-[14px]">
            Featured woman collections that give you another vibe.
          </p>
          {/* link */}
          <Link className="absolute -bottom-full left-5 group-hover:bottom-8 group-active:bottom-8 transition-all duration-700 z-50 underline">
            Shop Now
          </Link>
        </div>
        <div className="group relative overflow-hidden col-span-2 md:col-span-1 md:row-span-1 bg-black rounded flex items-center">
          {/* overlay */}
          <div className="group-hover:bg-white/10 group-active:bg-white/10 w-full h-full absolute z-40 transition-all duration-300 "></div>
          {/* image */}
          <img src={Image3} alt="" />
          {/* title */}
          <h3 className="absolute -bottom-full left-5 group-hover:bottom-24 group-active:bottom-24 transition-all duration-300 z-50 text-2xl">
            Speakers
          </h3>
          {/* pretitle */}
          <p className="absolute -bottom-full left-5 group-hover:bottom-14 group-active:bottom-14 transition-all duration-700 z-50 text-[14px]">
            Amazon wireless speakers
          </p>
          {/* link */}
          <Link className="absolute -bottom-full left-5 group-hover:bottom-8 group-active:bottom-8 transition-all duration-700 z-50 underline">
            Shop Now
          </Link>
        </div>
        <div className="group relative overflow-hidden col-span-2 md:col-span-1 md:row-span-1 bg-black rounded">
          {/* overlay */}
          <div className="group-hover:bg-white/10 group-active:bg-white/10 w-full h-full absolute z-40 transition-all duration-300 "></div>
          {/* image */}
          <img src={Image4} alt="" />
          {/* title */}
          <h3 className="absolute -bottom-full left-5 group-hover:bottom-24 group-active:bottom-24 transition-all duration-300 z-50 text-2xl">
            Perfume
          </h3>
          {/* pretitle */}
          <p className="absolute -bottom-full left-5 group-hover:bottom-14 group-active:bottom-14 transition-all duration-700 z-50 text-[14px]">
            GUCCI INTENSE OUD EDP
          </p>
          {/* link */}
          <Link className="absolute -bottom-full left-5 group-hover:bottom-8 group-active:bottom-8 transition-all duration-700 z-50 underline">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeFeautered;
