import React from "react";
import { motion } from "framer-motion";

const NewsLetter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-200 dark:bg-gray-900 w-full py-16 px-4"
    >
      <div className="grid max-w-[1240px] mx-auto lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Want tips & tricks to optimize your flow
          </h1>
          <p className="text-xl py-2">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="my-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-between w-full"
          >
            <input
              className="p-3 flex w-full rounded-md text-black outline-orange-200"
              placeholder="Enter Email"
              type="email"
            />
            <button className="bg-orange-600 w-[160px] text-white dark:text-black p-3 my-6 ml-4 font-bold rounded-md">
              Notify Me
            </button>
          </motion.div>
          <p className="font-bold">
            We care about the protection of your date.
            <span className="text-orange-600"> Read our Privacy Policy</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsLetter;
