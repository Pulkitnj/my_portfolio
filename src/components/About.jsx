import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="text-white py-16 px-8 lg:px-32 flex flex-col items-center">
      {/* Top Section - Heading */}
      <motion.h1 
        className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      {/* Bottom Section - Animated Image */}
      <motion.div 
        className="flex justify-center mb-10"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
          <img
            src="/myphoto.jpeg" // Replace with your image URL
            alt="Pulkit Jain"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="lg:w-2/3 space-y-6 text-center lg:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-2xl text-gray-300">
          <span className="font-semibold text-white">Passionate Full-Stack Developer</span> | Specializing in{" "}
          <span className="font-semibold text-white">Front-End (React, Next.js)</span> &{" "}
          <span className="font-semibold text-white">Back-End (Node.js)</span>
        </p>
        <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
          Hello! I’m <span className="font-semibold text-white">Pulkit Jain</span>, a dedicated developer with expertise in building efficient web applications. Skilled in C++, SQL, and JavaScript, I’m constantly exploring new technologies to enhance my toolkit.
        </p>
        <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
          My projects include a <span className="font-semibold text-white">Trekking App</span>, a <span className="font-semibold text-white">Gym Application</span>, <span className="font-semibold text-white">Travel Tinder</span>, and a <span className="font-semibold text-white">payment app</span>, helping me gain hands-on experience in full-stack development, cloud integration, and front-end animations.
        </p>

        {/* Core Skills */}
        <div className="text-gray-400 leading-relaxed max-w-lg mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-white">Core Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><span className="font-semibold text-white">Front-End:</span> React, Next.js, CSS, Tailwind, Framer Motion</li>
            <li><span className="font-semibold text-white">Back-End:</span> Node.js, Express.js, MongoDB, SQL</li>
            <li><span className="font-semibold text-white">Problem Solving:</span> C++, Data Structures & Algorithms</li>
            <li><span className="font-semibold text-white">Extras:</span> Firebase, Animation Libraries (3.js, Framer Motion)</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;