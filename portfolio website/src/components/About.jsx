import React from "react";
import profilepic from "../assets/port-prof-2.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      id="about"
      ref={ref}
      className="relative py-20 text-white overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-0 h-64 w-64 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-1 text-xs uppercase tracking-[0.15em] text-purple-200">
            Who I Am
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold underline tracking-wide">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-gray-300">
            Passionate Full-Stack Developer crafting seamless web experiences
            with the MERN stack and Java backend.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* Profile image block */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 opacity-70 blur-xl group-hover:blur-2xl group-hover:opacity-100 transition-all duration-500" />

              {/* Image wrapper */}
              <div className="relative rounded-full p-1 bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500">
                <div className="rounded-full bg-[#05040b] p-1">
                  <motion.img
                    src={profilepic}
                    alt="Abhishek Gasti"
                    className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full object-cover shadow-[0_18px_40px_rgba(0,0,0,0.7)]"
                    animate={{
                      boxShadow: [
                        "0 0 14px rgba(205,28,24,0.9)",
                        "0 0 18px rgba(75,0,130,0.9)",
                      ],
                      scale: [1, 1.04],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content + details */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full md:w-2/3 text-left"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              Hi, I'm <span className="text-purple-300">Abhishek Gasti</span>.
            </h3>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
              I’m a MERN stack developer with a strong foundation in computer
              science and business systems. I’m currently pursuing my B.E. at
              SGBIT College, Belagavi (VTU), where I’ve sharpened my
              problem-solving skills and developed a deep interest in building
              efficient, scalable web applications.
            </p>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
              I enjoy working across the full stack — from crafting responsive
              UIs in React to designing secure backend APIs using Node.js or
              Java with Spring Boot. Beyond coding, story-driven games and
              movies keep my creativity and curiosity alive.
            </p>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-5">
              I’m always eager to learn new technologies, participate in
              hackathons, and take on challenging projects that push me to grow
              as a developer.
            </p>

            {/* Quick highlights */}
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="rounded-full border border-purple-400/60 bg-purple-500/10 px-3 py-1 text-xs md:text-sm text-purple-100">
                MERN Stack Developer
              </span>
              <span className="rounded-full border border-indigo-400/60 bg-indigo-500/10 px-3 py-1 text-xs md:text-sm text-indigo-100">
                Java & Spring Boot
              </span>
              <span className="rounded-full border border-pink-400/60 bg-pink-500/10 px-3 py-1 text-xs md:text-sm text-pink-100">
                Problem Solving & DSA
              </span>
            </div>

            {/* Small stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm md:text-base">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                <p className="text-xs text-gray-400">Experience</p>
                <p className="text-lg font-semibold text-purple-300">
                  Fresher
                </p>
                <p className="text-xs text-gray-400">
                  Focused on real projects & hackathons
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                <p className="text-xs text-gray-400">Hackathons</p>
                <p className="text-lg font-semibold text-purple-300">2+</p>
                <p className="text-xs text-gray-400">
                  National-level MERN projects
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md col-span-2 sm:col-span-1">
                <p className="text-xs text-gray-400">Tech Focus</p>
                <p className="text-lg font-semibold text-purple-300">
                  MERN & Java
                </p>
                <p className="text-xs text-gray-400">
                  Full-stack web development
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
