import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLightMode, MdNightlightRound } from "react-icons/md";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="dark:bg-gray-950 bg-white drop-shadow-md fixed top-0 w-full z-50">
      <div className=" flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-gray-950 ">
        <h1 className="  w-full text-3xl font-bold text-orange-600">REACT.</h1>
        <ul className="hidden md:flex dark:text-white ">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose className=" dark:text-white mr-3" size={20} />
          ) : (
            <AiOutlineMenu className=" dark:text-white mr-3" size={20} />
          )}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[220px] h-screen border-r border-r-gray-600 bg-white dark:bg-gray-950 dark:text-white ease-in-out duration-500 cursor-pointer"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-orange-600 m-4">
            REACT.
          </h1>
          <li className="p-4 border-b border-gray-600 dark:hover:bg-gray-900 hover:bg-gray-900 hover:text-white">
            Home
          </li>
          <li className="p-4 border-b border-gray-600 dark:hover:bg-gray-900 hover:bg-gray-900 hover:text-white">
            Company
          </li>
          <li className="p-4 border-b border-gray-600 dark:hover:bg-gray-900 hover:bg-gray-900 hover:text-white">
            Resources
          </li>
          <li className="p-4 border-b border-gray-600 dark:hover:bg-gray-900 hover:bg-gray-900 hover:text-white">
            About
          </li>
          <li className="p-4 hborder-gray-600 dark:hover:bg-gray-900 hover:bg-gray-900 hover:text-white">
            Contact
          </li>
        </ul>
        <DarkMode />
      </div>
    </div>
  );
};

export default Navbar;
