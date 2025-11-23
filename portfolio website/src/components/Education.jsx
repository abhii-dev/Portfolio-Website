import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const educompleted = [
    {
      id: 1,
      name: "Mallasajjan English Medium School",
      duration: "Primary Schooling, LKG – 2nd Std",
      location: "Dharwad",
      link: "https://mallasajjan.org/",
    },
    {
      id: 2,
      name: "Shanti Sadana High School",
      duration: "Primary & High School, 3rd – 10th",
      location: "Dharwad",
      link: "https://www.justdial.com/Dharwad/Shanti-Sadan-School-Navodayanagar/0836PX836-X836-120709131924-E8P8_BZDET",
    },
    {
      id: 3,
      name: "Prism PU Science College",
      duration: "Secondary Schooling, 1st & 2nd PU",
      location: "Dharwad",
      link: "http://prismtimmanagoudarcollege.com/",
    },
    {
      id: 4,
      name: "SG Balekundri Institute of Technology",
      duration: "B.E. in Computer Science & Business Systems",
      location: "Belagavi",
      link: "https://sgbit.edu.in/",
    },
  ];

  return (
    <div
      id="education"
      ref={ref}
      className="relative container mx-auto py-20 px-4 text-white overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-0 h-64 w-64 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full blur-3xl" />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-2xl sm:text-4xl font-bold underline text-center mb-4"
      >
        Education
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-300 text-center max-w-2xl mx-auto text-sm sm:text-base mb-10"
      >
        A journey through the institutions that shaped my academic foundation
        and technical growth.
      </motion.p>

      {/* Left-aligned timeline */}
      <div className="relative max-w-3xl mx-auto mt-6">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-400 via-gray-600 to-indigo-400 opacity-70" />

        <div className="space-y-8 pl-10">
          {educompleted.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
              className="relative flex items-start gap-4"
            >
              {/* Dot */}
              <div className="absolute -left-6 mt-2 h-4 w-4 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 border border-white/60 shadow-[0_0_18px_rgba(168,85,247,0.8)]" />

              {/* Card */}
              <div className="w-full bg-[#090717]/80 border border-white/10 backdrop-blur-xl p-5 rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.7)] hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-purple-300 text-sm font-semibold sm:text-xl">
                    {edu.name}
                  </h3>
                </div>
                <h2 className="text-gray-300 text-xs sm:text-sm mt-1">
                  {edu.duration}
                </h2>
                <p className="text-indigo-300 text-xs sm:text-sm mt-1">
                  {edu.location}
                </p>
                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="mt-3 px-4 py-2 rounded-full text-xs sm:text-sm overflow-hidden border border-transparent text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 shadow-[0_10px_25px_rgba(0,0,0,0.7)] hover:shadow-purple-500/60 hover:-translate-y-0.5 transition-all duration-300"
                    initial={{ boxShadow: "0 0 8px #CD1C18" }}
                    animate={{
                      boxShadow: ["0 0 8px #CD1C18", "0 0 10px #4B0082"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    Visit
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
