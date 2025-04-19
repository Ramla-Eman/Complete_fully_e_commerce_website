import React from "react";
// icon
import { MdArrowForwardIos } from "react-icons/md";
// text maping
const text = [
  {
    title: "Woman’s Fashion",
    icon: <MdArrowForwardIos />,
  },
  {
    title: "Men’s Fashion",
    icon: <MdArrowForwardIos />,
  },
  {
    title: "Electronics",
  },
  {
    title: "Home & Lifestyle",
  },
  {
    title: "Medicine",
  },
  {
    title: "Sports & Outdoor",
  },
  {
    title: "Baby’s & Toys",
  },
  {
    title: "Groceries & Pets",
  },
  {
    title: "Health & Beauty",
  },
];

const CategoryDropdown = () => {
  return (
    <div className="border-r-2 border-[#F5F5F5] p-4 lg:block hidden">
      <div>
        <ul className="flex flex-col gap-4">
          {text.map((item, index) => (
            <li className="flex items-center justify-between gap-8" key={index}>
              <p className="text-[16px]">{item.title}</p>
              <span>{item.icon}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryDropdown;
