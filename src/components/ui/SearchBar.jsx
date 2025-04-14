import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const NavbarSearch = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <>
      {/* Search icon in navbar */}
      <div className="relative z-50 rounded px-2 py-2 md:bg-[#F5F5F5] flex items-center md:w-[284px]">
        {/* Input for desktop/tab */}
        <input
          type="text"
          placeholder="What are you looking for?"
          className="hidden md:block outline-0 w-full bg-transparent"
        />

        <FiSearch
          className="text-xl cursor-pointer md:mr-2"
          onClick={() => setShowMobileSearch(!showMobileSearch)}
        />
      </div>

      {/* Mobile full search input */}
      {showMobileSearch && (
        <div className="block md:hidden w-full px-4 py-3 bg-[#F5F5F5] absolute top-[78px] left-0 z-40 transition-all duration-300">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full px-4 py-2 outline-none rounded "
          />
        </div>
      )}
    </>
  );
};

export default NavbarSearch;
