import React from 'react'
// images
import Img1 from '../assets/productImg9.jpeg'
import Img2 from '../assets/productImg10.png'
import Img3 from '../assets/productImg11.png'
import Img4 from '../assets/productImg12.png'
import Img5 from '../assets/productImg13.png'
import Img6 from '../assets/productImg14.png'
import Img7 from '../assets/productImg15.png'
import Img8 from '../assets/productImg16.png'
// icons
import { LiaStarSolid } from "react-icons/lia";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
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
]

const OurProducts = () => {
  return (
    <div className='my-16'>OurProducts</div>
  )
}

export default OurProducts