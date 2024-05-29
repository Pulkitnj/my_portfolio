import React from "react";
import {HERO_CONTENT} from "../constants";
import home from "../assets/home.png";
import { motion } from "framer-motion";
import CV from "../assets/CV.pdf";

const container = (delay) => ({
  hidden: {x:-100, opacity: 0 },
  visibile: {
    x:0,
    opacity: 1,
    transition: {
      duration:0.8,
      delay: delay,
      ease: "easeOut"
    },
  },
});

function Hero() {
  return (
    <div className="border-b h-full border-neutral-900 pb-4 lg:mg-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1
                  variants={container(0)}
                  initial="hidden"
                  animate="visibile"
                  className="pb-16 text-6xl tracking-tight lg:mt--8 lg:text-8xl cursor-none">
                Pulkit Jain
                </motion.h1>
                <motion.span 
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visibile"
                  className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    Full Stack Developer
                </motion.span>
                <motion.p
                  variants={container(1)}
                  initial="hidden"
                  animate="visibile"
                  className="my-6 text-lg max-w-xl py-6 tracking-tighter">{HERO_CONTENT}
                </motion.p>
                <motion.a 
                variants={container(1.2)}
                initial="hidden"
                animate="visibile"
                download="" 
                href={CV} 
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white py-2 px-4 rounded-full text-lg font-semibold">Resume</motion.a>
            </div>
        </div>
        
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className=" flex justify-center">
                <motion.img
                initial={{ x: 100 ,opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 1, delay: 1.2}}
                className="w-8/12 h-8/12 static " src={home} alt="home" />
            </div>
        </div>
      </div>
      <div className='relative flex justify-center items-center'>
        <a href='/'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeOut"
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Hero;
