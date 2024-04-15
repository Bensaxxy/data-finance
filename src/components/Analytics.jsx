import React from "react";
import laptop from "../assets/laptop.png";

const Analytics = () => {
  return (
    <div className=" bg-white dark:bg-gray-950 w-full py-16 px-4">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2 place-items-center">
        <img className="w-[520px]" src={laptop} />
        <div>
          <div className=" flex flex-col justify-center">
            <p className=" uppercase text-orange-600 font-bold">
              data analytics dashboard
            </p>
            <h1 className=" font-bold md:text=4xl text-xl sm:text-3xl py-2">
              Manage Data Analytics Centrally
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dicta minus molestiae vel beatae natus eveniet ratione temporibus
              aperiam harum alias officiis assumenda officia quibusdam deleniti
              eos cupiditate dolore doloribus!
            </p>
          </div>
          <div className=" mx-auto py-3">
            <button className=" bg-orange-600 w-[200px] text-white dark:text-black p-3 my-6 font-bold rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
