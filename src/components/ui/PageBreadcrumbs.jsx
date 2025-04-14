import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  // Split path into parts
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-600 mb-4">
      <ul className="flex space-x-2 font-poppins max-w-7xl mx-auto pt-6 px-6 py-5">
        <li>
          <Link to="/" className="hover:underline text-[#00000083] ">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="capitalize text-black ">{name}</span>
              ) : (
                <Link to={routeTo} className="hover:underline text-black capitalize">
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
