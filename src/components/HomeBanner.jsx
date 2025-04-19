import React from "react";
// img
import Img1 from "../assets/bannerImg.png";
// circle cards
const circleCards = [
  {
    title: "23",
    pretitle: "Hours",
  },
  {
    title: "05",
    pretitle: "Days",
  },
  {
    title: "59",
    pretitle: "Minutes",
  },
  {
    title: "35",
    pretitle: "Seconds",
  },
]

const HomeBanner = () => {
  return (
    <div className="my-16 bg-black md:block hidden">
      <div className="flex justify-between items-center px-10 py-14 ">
        <div className="flex flex-col justify-between gap-9">
          <div className="text-[#00FF66]">
            <p>Categories</p>
          </div>
          <div className="font-inter font-semibold text-5xl  text-white">
            <p>Enhance Your<br/> Music Experience</p>
          </div>
          <div>
            <ul className="flex  gap-5">
              {circleCards.map((item, index) => (
                <li key={index} className="flex flex-col items-center justify-center bg-white rounded-full w-[62px] h-[62px] text-black">
                  <p className="font-semibold text-[16px]">{item.title}</p>
                  <p className="text-[11px]">{item.pretitle}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="bg-[#00FF66] text-white py-4 px-10 cursor-pointer rounded">Buy Now!</button>
          </div>
        </div>
        <div className="w-[600px] h-[420px]">
          <img src={Img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
