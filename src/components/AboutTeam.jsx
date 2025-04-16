import React from "react";
// images
import Image1 from "../assets/aboutteamImg.png";
// icons
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// card
const card = [
  {
    image: Image1,
    name: "Tom Cruise",
    role: "Founder & Chairman",
    links: {
      github: "",
      instagram: "",
      linkedin: "",
    },
  },
  {
    image: Image1,
    name: "Tom Cruise",
    role: "Founder & Chairman",
    links: {
      github: "",
      instagram: "",
      linkedin: "",
    },
  },
  {
    image: Image1,
    name: "Tom Cruise",
    role: "Founder & Chairman",
    links: {
      github: "",
      instagram: "",
      linkedin: "",
    },
  },
];

const AboutTeam = () => {
  return (
    <div className="my-[80px]">
      <ul className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {card.map((item, index) => (
          <li key={index} className="flex flex-col gap-1">
            {/* image */}
            <div className="bg-[#F5F5F5] rounded px-7 pt-7">
              <img src={item.image} alt={item.name} />
            </div>
            {/* name and role */}
            <h4 className="font-semibold font-inter text-[32px]">{item.name}</h4>
            <p>{item.role}</p>
            {/* social links */}
            <div className="flex gap-2">
              {/* Github Url */}
              <div>
                <a
                  href={item.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  <FaGithub />
                </a>
              </div>
              {/* Instagram Url */}
              <div>
                <a
                  href={item.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  <FaInstagram />
                </a>
              </div>
              {/* Linkedin Url */}
              <div>
                <a
                  href={item.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutTeam;
