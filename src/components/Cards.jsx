import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/single.png";
import img2 from "../assets/double.png";
import img3 from "../assets/triple.png";

const CardsData = [
  {
    id: 1,
    image: img1,
    title: "Single User",
    price: "$149",
    title2: "500 GB Storage",
    title3: "1 User Allowed",
    title4: "Send up to 20GB",
    btn: "Start Trial",
  },
  {
    id: 2,
    image: img2,
    title: "Partnership",
    price: "$199",
    title2: "1 TB Storage",
    title3: "3 User Allowed",
    title4: "Send up to 10GB",
    btn: "Start Trial",
  },
  {
    id: 3,
    image: img3,
    title: "Group Account",
    price: "$299",
    title2: "5 TB Storage",
    title3: "10 User Allowed",
    title4: "Send up to 20GB",
    btn: "Start Trial",
  },
];

const Cards = () => {
  return (
    <div className="w-full px-4 py-[90px]">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-8">
        {CardsData.map((data) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex justify-center text-center hover:bg-gray-200 px-[100px] py-[50px] duration-300 rounded-lg shadow-xl dark:bg-gray-900 dark:hover:bg-gray-800"
            key={data.id}
          >
            <img
              className="w-[80px] absolute -top-12 bottom-0 z-30 dark:bg-white dark:rounded-md dark:w-[95px] dark:p-3"
              src={data.image}
            />
            <div>
              <h1 className="font-bold md:text=3xl text-xl sm:text-2xl ">
                {data.title}
              </h1>
              <p className="font-bold md:text=4xl text-xl sm:text-3xl my-6 ">
                {data.price}
              </p>
              <p className="border-t border-gray-300 my-2 p-2">{data.title2}</p>
              <p className="border-t border-gray-300 my-2 p-2">{data.title3}</p>
              <p className="border-t border-gray-300 my-2 p-2">{data.title4}</p>
              <button className="bg-orange-600 p-3 w-[120px] rounded-lg font-bold">
                {data.btn}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
