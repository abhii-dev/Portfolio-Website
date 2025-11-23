import React from "react";
import { motion } from "framer-motion";
import gif from "../assets/your-gif.gif";
import { Link } from "react-scroll";
import resume from "../assets/resume.pdf";


const Hero = () => {
  return (
    <div className="relative text-white pt-24 pb-20 overflow-hidden">
      {/* Dark Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0" />
      </div>

      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full  blur-3xl" />
        <div className="absolute bottom-10 left-10 h-52 w-52 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* GIF */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative inline-block"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500/40 via-fuchsia-500/40 to-cyan-400/40 blur-xl opacity-60" />
          <img
            src={gif}
            alt="Hero GIF"
            className="relative w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.4)]"
          />
        </motion.div>

        {/* Small Tag / Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-white/5 px-4 py-1 text-xs sm:text-sm tracking-[0.18em] uppercase text-purple-200/90">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            Full-Stack Developer
          </span>
        </motion.div>



        {/* Role / Stack */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-3 text-lg sm:text-2xl font-semibold text-purple-300"
        >
          MERN • Java Backend • Spring Boot • SQL • DSA
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-5 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base leading-relaxed"
        >
         Full-Stack Developer skilled in MERN and Java backend technologies. Experienced in building real-world projects such as chat systems, 
         AI-powered hospital management, and inventory platforms. Strong foundation in Core & Advanced Java, Spring Boot, Hibernate, SQL, and REST APIs.
         Focused on improving DSA skills and writing clean, efficient, and scalable code.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >

          <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          >

          <button className="relative px-7 py-3 rounded-xl text-sm sm:text-base font-medium bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-lg shadow-purple-500/40 hover:scale-[1.03] active:scale-95 transition-transform">
            View Projects
          </button>
          </Link>

          <a 
           href={resume}
           target="_blank"
           rel="noopener noreferrer"
          
          >
            <button className="relative px-7 py-3 rounded-xl text-sm sm:text-base font-medium border border-purple-400/60 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-purple-300 transition-colors">
            Download Resume
          </button>

          </a>
          
          
        </motion.div>

        {/* Small Metrics Row */}
              <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.6 }}
        className="mt-8 flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-gray-400"
      >
        <span className="flex items-center gap-2 italic text-purple-300">
        「立て。」 — 成鎮宇
      </span>
      </motion.div>

            </div>
    </div>
  );
};

export default Hero;
