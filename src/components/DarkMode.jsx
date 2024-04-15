import React from "react";
import { useEffect, useState } from "react";
// import { MdOutlineLightMode, MdNightlightRound } from "react-icons/md";
import lightbtn from "../assets/website/lightmode.png";
import darkbtn from "../assets/website/Darkmode.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  console.log(element);

  {
    /**adding to theme to local storage */
  }
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });
  return (
    <div className=" relative ">
      <img
        src={lightbtn}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`cursor-pointer absolute z-10  ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300 w-[40px] sm:w-[30px] md:w-[55px]`}
      />
      <img
        src={darkbtn}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`cursor-pointer w-[40px] sm:w-[30px] md:w-[55px]`}
      />
    </div>
  );
};

export default DarkMode;
