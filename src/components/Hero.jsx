import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className=" bg-gray-200 dark:bg-gray-900">
      <div className=" max-w-[800] mt-[50px] h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" uppercase text-orange-600 font-bold p-2">
          Growing with Data analytics
        </p>
        <h1 className=" md:text-7xl sm:text-6xl font-bold text-4xl md:py-5">
          Grow with data.
        </h1>
        <div className=" flex gap-x-3 justify-center items-center">
          <p className=" md:text-3xl sm:text-3xl text-xl font-bold">
            Fast, Flexible Financing for
          </p>
          <ReactTyped
            className="md:text-3xl sm:text-3xl text-xl font-bold text-orange-600"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={140}
            backSpeed={140}
            loop
          />
        </div>
        <p className=" md:text-xl text-xl mt-3 text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
        </p>

        <div className=" mx-auto py-3">
          <button className=" bg-orange-600 w-[200px] text-white dark:text-black p-3 my-6 font-bold rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
