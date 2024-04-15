import React from "react";
import {
  AiFillDribbbleSquare,
  AiFillGithub,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" py-16 px-4 dark:bg-gray-900 bg-gray-200 w-full">
      <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 ">
        <div>
          <h1 className="  w-full text-3xl font-bold text-orange-600">
            REACT.
          </h1>
          <p className=" py-2">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
            minus molestiae vel beatae natus eveniet ratione temporibus aperiam
            harum alias officii
          </p>
          <div className="flex gap-4 mt-5 cursor-pointer">
            <MdFacebook
              className=" hover:text-orange-600 duration-300"
              size={25}
            />
            <AiFillTwitterSquare
              className=" hover:text-orange-600 duration-300"
              size={25}
            />
            <AiFillGithub
              className=" hover:text-orange-600 duration-300"
              size={25}
            />
            <AiFillDribbbleSquare
              className=" hover:text-orange-600 duration-300"
              size={25}
            />
          </div>
        </div>

        <div className=" lg:col-span-2 flex justify-between ">
          <div>
            <h1 className=" font-bold text-gray-500 mb-3"> Solutions</h1>
            <ul>
              <li className=" py-2">Analytics</li>
              <li className=" py-2">Marketing</li>
              <li className=" py-2">Commerce</li>
              <li className=" py-2">Insights</li>
            </ul>
          </div>
          <div>
            <h1 className=" font-bold text-gray-500 mb-3"> Supports</h1>
            <ul>
              <li className=" py-2">Pricing</li>
              <li className=" py-2">Documentation</li>
              <li className=" py-2">Guides</li>
              <li className=" py-2">API Status</li>
            </ul>
          </div>
          <div>
            <h1 className=" font-bold text-gray-500 mb-3"> Company</h1>
            <ul>
              <li className=" py-2">About</li>
              <li className=" py-2">Blog</li>
              <li className=" py-2">Jobs</li>
              <li className=" py-2">Press</li>
            </ul>
          </div>
          <div>
            <h1 className=" font-bold text-gray-500 mb-3"> Legal</h1>
            <ul>
              <li className=" py-2">Claime</li>
              <li className=" py-2">Policy</li>
              <li className=" py-2">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
