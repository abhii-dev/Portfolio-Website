import React from "react";
import { motion } from "framer-motion";
import gif from "../assets/your-gif.gif";

const Hero = () => {
  return (
    <div className="relative text-white py-20 overflow-hidden">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* CLEAN GIF — No border, no wrapper, no box */}
        <motion.img
          src={gif}
          alt="GIF"
          className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-xl mx-auto"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 text-4xl sm:text-5xl font-extrabold leading-tight"
        >
          Creating. Curating.{" "}
          <span className="text-purple-400">Conquering.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-3 text-3xl sm:text-4xl font-bold text-purple-400"
        >
          Personal Portfolio
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-5 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base leading-relaxed"
        >
          My Portfolio showcases my expertise in Full Stack MERN Development,
          highlighting projects built with MongoDB, Express.js, React, and
          Node.js. I’ve also integrated Three.js to create interactive 3D
          experiences. This portfolio reflects my creativity, problem-solving,
          and passion for modern web development.
        </motion.p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <motion.button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="px-6 py-3 rounded-full text-sm sm:text-base font-medium bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-purple-500/60 hover:-translate-y-0.5 transition-all duration-300"
          >
            Hire Me
          </motion.button>

          <motion.button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative px-6 py-3 rounded-full text-sm sm:text-base font-medium border border-purple-500/60 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.7)] overflow-hidden"
          >
            <motion.span
              animate={{
                boxShadow: ["0 0 10px #CD1C18", "0 0 12px #4B0082"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 rounded-full border border-purple-400/70 pointer-events-none"
            />
            <span className="relative">My Story</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
