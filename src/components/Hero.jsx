import React from 'react';
import { motion } from 'framer-motion'; 
import gif from '../assets/your-gif.gif'; 


const Hero = () => {
  return (
    <div className="text-white py-10 flex flex-col items-center">
      {/* Animated GIF */}
      <motion.img
        src={gif} 
        alt="Sharingan animation"
        className="w-72 h-72 object-cover rounded-lg shadow-lg "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }} 
      />

      {/* Hero Text */}
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.5,duration:0.5}}
      className="mt-8 text-center">
        <motion.h1
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:1, duration:0.5}} 
        className="text-5xl font-bold max-md:text-[1.5rem]">Creating. Curating. Conquering.</motion.h1>
        <motion.span
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:1.1, duration:0.5}} 
        className="block mt-4 text-5xl text-purple-500 font-bold max-md:text-[2rem]">Personal Portfolio</motion.span>
        <motion.p 
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:1.1, duration:0.5}} 
        className="mt-4 max-w-xl ml-[4.5rem] max-md:ml-[0.5rem] max-md:text-[0.9rem] text-gray-400">
          My Portfolio showcases my expertise in Full Stack Mern Development, highlighting my skills in MonogoDB, Express.js. React, and Node.js. I have built many projects that showcases my experience in building scalable and efficient applications. I have integrated Three.js creating 3D representaion of my skills. Through this portfolio, I aim to present a compeling snapshot of my abilities, creativity, and passion for modern Web Development.
        </motion.p>


        <div className="mt-6 flex space-x-4 justify-center">
        <motion.button
        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{delay:1.5, duration:0.5}}
        className="px-6 py-3 rounded-full text-lg text-white transition bg-purple-800"
          >
            Hire Me
          </motion.button>

       <motion.button
       onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        className="relative px-6 py-3 rounded-full text-lg text-white overflow-hidden border border-transparent"
        initial={{ opacity: 0, x: 100, boxShadow: "0 0 8px #CD1C18" }} 
        animate={{
          opacity: 1,
          x: 0,
          boxShadow: ["0 0 8px #CD1C18", "0 0 8px #4B0082"],
        }}
        transition={{
          delay: 1.5, 
          duration: 0.5,
          boxShadow: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
        }}
      >
        My Story
      </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
