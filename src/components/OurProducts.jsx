import React from "react";
// images
import Img1 from "../assets/productImg9.jpeg";
import Img2 from "../assets/productImg10.png";
import Img3 from "../assets/productImg11.png";
import Img4 from "../assets/productImg12.png";
import Img5 from "../assets/productImg13.png";
import Img6 from "../assets/productImg14.png";
import Img7 from "../assets/productImg15.png";
import Img8 from "../assets/productImg16.png";
// icons
import { LiaStarSolid } from "react-icons/lia";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar, CiHeart } from "react-icons/ci";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
// products card
const card = [
  {
    image: Img1,
    title: "Bread Dry Dog Food",
    price: "$100",
    ratingStars: [
      <LiaStarSolid />,
      <LiaStarSolid />,
      <LiaStarSolid />,
      <CiStar />,
      <CiStar />,
    ],
    ratingNum: "35",
    width: 115,
  },
  {
    image: Img2,
    title: "CANON EOS DSLR Camera",
    price: "$360",
    ratingStars: [
      <LiaStarSolid />,
      <LiaStarSolid />,
      <LiaStarSolid />,
      <CiStar />,
    ],
    ratingNum: "95",
  },
  {
    image: Img3,
    title: "RASUS FHD Gaming Laptop",
    price: "$700",
    ratingStars: [
      <LiaStarSolid />,
      <FaRegStarHalfStroke />,
      <CiStar />,
      <CiStar />,
      <CiStar />,
    ],
    ratingNum: "32",
  },
  {
    image: Img4,
    title: "Curology Product Set",
    price: "$500",
    ratingStars: [
      <LiaStarSolid />,
      <LiaStarSolid />,
      <FaRegStarHalfStroke />,
      <CiStar />,
      <CiStar />,
    ],
    ratingNum: "55",
    width: 115,
  },
  {
    image: Img5,
    title: "Kids Electric Car",
    price: "$960",
    ratingStars: [
      <LiaStarSolid />,
      <LiaStarSolid />,
      <FaRegStarHalfStroke />,
      <CiStar />,
      <CiStar />,
    ],
    ratingNum: "55",
  },
  {
    image: Img6,
    title: "Jr.Zoom Soccer Cleats",
    price: "$1160",
    ratingStars: [
      <LiaStarSolid />,
      <LiaStarSolid />,
      <FaRegStarHalfStroke />,
      <CiStar />,
      <CiStar />,
    ],
    ratingNum: "55",
  },
  {
    image: Img7,
    title: "GP11 Shooter USB Gamepad",
    price: "$660",
    ratingStars: [
      <LiaStarSolid />,
      <LiaStarSolid />,
      <FaRegStarHalfStroke />,
      <CiStar />,
      <CiStar />,
    ],
    ratingNum: "55",
  },
  {
    image: Img8,
    title: "Quilted Sating Jacket",
    price: "$660",
    ratingStars: [
      <LiaStarSolid />,
      <LiaStarSolid />,
      <FaRegStarHalfStroke />,
      <CiStar />,
      <CiStar />,
    ],
    ratingNum: "55",
  },
];

const OurProducts = () => {
  return (
    <div className="my-16">
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <div className="bg-[#DB4444] w-4 h-8 rounded"></div>
          <p className="text-[#DB4444]">Our Products</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h4 className="text-3xl font-semibold font-inter">
            Explore Our Products
          </h4>
          {/* previous and next */}
          <div className="my-6">
            <div className="flex items-center justify-end gap-4">
              {/* previous */}
              <div className="group">
                <div className="bg-[#f5f5f5] group-hover:bg-[#00000063] group-active:bg-[#00000063] text-black group-hover:text-white group-active:text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <IoIosArrowRoundBack className="text-4xl" />
                </div>
              </div>
              {/* next */}
              <div className="group">
                <div className="bg-[#f5f5f5] group-hover:bg-[#00000063] group-active:bg-[#00000063] text-black group-hover:text-white group-active:text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <IoIosArrowRoundForward className="text-4xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-14 items-center justify-center">
        <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {card.map((item, index) => (
            <li key={index} className="group">
              <div className="flex flex-col gap-2">
                <div className="bg-[#F5F5F5] px-4 pt-4 rounded w-[270px] h-[250px] flex items-center justify-center relative overflow-hidden">
                  <div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-[${item.width}px]`}
                    />
                  </div>
                  <div className="absolute top-4 -right-full group-hover:right-4 group-active:right-4 transition-all duration-300 flex flex-col gap-1">
                    <div className="bg-white rounded-full p-1 text-xl">
                      <CiHeart />
                    </div>
                    <div className="bg-white rounded-full p-1 text-xl">
                      <IoEyeOutline />
                    </div>
                  </div>
                  <div className="absolute -bottom-full group-hover:bottom-0 group-active:bottom-0 w-full bg-black text-white p-4 text-center transition-all duration-300">
                    <p>Add To Cart</p>
                  </div>
                </div>
                <div className=" px-1">
                  <p className="font-poppins">{item.title}</p>
                </div>
                <div className="flex gap-2 items-center px-1">
                  <div className="text-[#DB4444] font-poppins">
                    {item.price}
                  </div>
                  <div className="text-[#FFAD33] flex">{item.ratingStars}</div>
                  <div className="text-[#0000009f] font-poppins">
                    ({item.ratingNum})
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <button className="bg-[#DB4444] text-white py-4 px-10 cursor-pointer rounded font-poppins">View All Products</button>
        </div>
      </div>

    </div>
  );
};

export default OurProducts;
