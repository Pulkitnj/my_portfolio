import React,{useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
//useScroll is used to get the scroll position of the page
//useRef is used to get the reference of the div
//useTransform is used to transform the scroll position into a value that can be used to animate
function Parallax() {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref,
    offset: ["start start ", "end start"]
    //start start means start at top of target element reaches top of viewport
    //end start means end at top of target element reaches bottom of viewport
  })
  //Can created different transitions for different elements
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "220%"])
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
  //If target is 0, then y position will be 0% and if target is 1, then y position will be 100%
  return (
    <div 
      className="mt-10 w-full h-screen flex text-center justify-center overflow-x-hidden" 
      >
      <motion.h1 
        style={{y: yText}}
        className="text-9xl mountain antialiased mb-96 z-30"> Code. Create. Connect. </motion.h1>
        <motion.div 
          className="w-full h-screen absolute z-40"
          style = {{ backgroundImage: 'url("/parallax/mountains.png")', backgroundSize: "cover", backgroundPosition: "bottom"}}
        ></motion.div>
        <motion.div 
          className="w-full h-full absolute z-20 mb-10"
          style = {{y: yBg,backgroundImage: 'url("/parallax/planets.png")', backgroundSize: "cover", backgroundPosition: "bottom"}}
        ></motion.div>
        <motion.div 
          className="w-full  h-full absolute z-10 mb-10 overflow-hidden"
          //If replaced y with x, then the image will move horizontally
          style = {{ backgroundImage: 'url("/parallax/stars.png")', backgroundSize: "cover", backgroundPosition: "bottom"}}
        ></motion.div>
    </div>
  )
}

export default Parallax
