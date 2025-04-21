import React from 'react'
// images
import Img1 from '../assets/productImg1.png'
import Img2 from '../assets/productImg2.png'
import Img3 from '../assets/productImg3.png'
import Img4 from '../assets/productImg4.png'
// icons
import { LiaStarSolid } from "react-icons/lia";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
// products card
const card = [
  {
    badge: "-40%",
    image: Img1,
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    preprice: "$160",
    ratingStars: [
      <LiaStarSolid />,
      <LiaStarSolid />,
      <LiaStarSolid />,
      <LiaStarSolid />,
      <LiaStarSolid />,
    ],
    ratingNum: "88",
  },
  {
    badge: "-35%",
    image: Img2,
    title: "AK-900 Wired Keyboard",
    price: "$960",
    preprice: "$1160",
    ratingStars: [
      <LiaStarSolid />,
      <LiaStarSolid />,
      <LiaStarSolid />,
      <LiaStarSolid />,
      <CiStar />,
    ],
    ratingNum: "75",
  },
  {
    badge: "-30%",
    image: Img3,
    title: "IPS LCD Gaming Monitor",
    price: "$370",
    preprice: "$400",
    ratingStars: [
      <LiaStarSolid />,
      <LiaStarSolid />,
      <LiaStarSolid />,
      <LiaStarSolid />,
      <LiaStarSolid />,
    ],
    ratingNum: "99",
  },
  {
    badge: "-25%",
    image: Img4,
    title: "S-Series Comfort Chair ",
    price: "$375",
    preprice: "$400",
    ratingStars: [
      <LiaStarSolid />,
      <LiaStarSolid />,
      <LiaStarSolid />,
      <LiaStarSolid />,
      <FaRegStarHalfStroke />,
    ],
    ratingNum: "99",
  },
]

const HomeTodays = () => {
  return (
    <div className='my-16'>HomeTodays</div>
  )
}

export default HomeTodays