import React from 'react'
// images
import Img1 from '../assets/productImg5.png'
import Img2 from '../assets/productImg6.png'
import Img3 from '../assets/productImg7.png'
import Img4 from '../assets/productImg8.png'
// icons
import { LiaStarSolid } from "react-icons/lia";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
// products card
const card = [
  {
    image: Img1,
    title: "The north coat",
    price: "$260",
    preprice: "$360",
    ratingStars: [
      <LiaStarSolid />,
      <LiaStarSolid />,
      <LiaStarSolid />,
      <FaRegStarHalfStroke />,
      <CiStar />,
    ],
    ratingNum: "65",
  },
  {
    image: Img2,
    title: "Gucci duffle bag",
    price: "$960",
    preprice: "$1160",
    ratingStars: [
      <LiaStarSolid />,
      <LiaStarSolid />,
      <LiaStarSolid />,
      <FaRegStarHalfStroke />,
      <CiStar />,
    ],
    ratingNum: "65",
  },
  {
    image: Img3,
    title: "RGB liquid CPU Cooler",
    price: "$160",
    preprice: "$170",
    ratingStars: [
      <LiaStarSolid />,
      <LiaStarSolid />,
      <LiaStarSolid />,
      <FaRegStarHalfStroke />,
      <CiStar />,
    ],
    ratingNum: "65",
  },
  {
    image: Img4,
    title: "Small BookSelf",
    price: "$360",
    ratingStars: [
      <LiaStarSolid />,
      <LiaStarSolid />,
      <LiaStarSolid />,
      <FaRegStarHalfStroke />,
      <CiStar />,
    ],
    ratingNum: "65",
  },
]

const Thismonth = () => {
  return (
    <div className='my-16'>Thismonth</div>
  )
}

export default Thismonth