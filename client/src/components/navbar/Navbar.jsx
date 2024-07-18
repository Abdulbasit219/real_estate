import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showmenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showmenu);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="w-[100%] h-[80px] bg-[#10585C] shadow-lg flex justify-around items-center relative z-50">
      {/* logo section */}
      <div className="w-[20%] text-center font-bold text-white text-sm sm:text-2xl inline px-4">
        <Link to={'/'}>
        <h1 className="">&lt;Real_Estate/&gt;</h1>
        </Link>
      </div>

      {/* list item and hamburger menu*/}
      <div className="w-[80%] flex flex-grow sm:justify-between px-10 z-50">

        {/* search box section */}
        <div
          className={`${
            showSearch
              ? "bg-[#10585C] border-t-2 w-full flex justify-center absolute top-20 left-0 shadow-lg p-4"
              : "hidden"
          } sm:flex px-4 `}
        >
          <input
            type="text"
            placeholder="Search..."
            className={`border-2 ${
              showSearch ? "w-full" : "w-[650px]"
            } border-gray-300 rounded-lg p-2`}
          />
        </div>

        {/* list items */}
        <ul
          className={`${
            showmenu
              ? `flex flex-col items-center justify-center w-full absolute ${
                  showSearch ? "top-40" : "top-20"
                } left-0 bg-[#10585C] border-white border-t-2 shadow-lg`
              : "hidden"
          } lg:flex gap-x-8 font-bold text-white text-xl items-center px-8`}
        >
          <li
            className={`${
              showmenu
                ? "w-full my-4 hover:text-black hover:bg-white text-center py-2 rounded-lg"
                : ""
            }`}
          >
            <Link to={'/'}>Home</Link>
          </li>
          <li
            className={`${
              showmenu
                ? "w-full my-4 hover:text-black hover:bg-white text-center py-2 rounded-lg"
                : ""
            }`}
          >
            <Link to={'/about'}>About</Link>
          </li>
          <li
            className={`${
              showmenu
                ? "w-full my-6 hover:bg-gray-100 my-4 hover:text-black hover:bg-white text-center py-2 rounded-lg"
                : ""
            }`}
          >
            <Link to={'/signin'}>Sign_in</Link>
          </li>
        </ul>

        {/* search box and hamburger menu for mobile devices */}
        <div className="ml-auto right-4 lg:hidden text-xl flex items-center text-white">
          <button
            onClick={toggleSearch}
            className="sm:hidden px-4 hover:opacity-50"
          >
            <IoSearch />
          </button>
          <button onClick={toggleMenu} className="hover:opacity-50">
            {showmenu ? <ImCross className="text-sm" /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
