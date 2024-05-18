import React from "react";
import about from "../assets/about.png";
import {ABOUT_TEXT} from "../constants";
import { motion } from "framer-motion";

function About() {
  return (
    <div className=" h-screen border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-6xl">
        About
        <span className=" text-neutral-500"> Me </span>
      </h2>
      <div className=" flex flex-wrap"> 
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className=" flex items-center justify-center">
            <img src={about} alt="about" className="w-9/12 h-9/12 mt-0 rounded-2xl" />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 mt-24 text-lg max-w-xl py-6">{ABOUT_TEXT}</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default About;
