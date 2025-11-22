import React from "react";
import project1 from "../assets/project1.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Work = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      id: 1,
      title: "Real-Time Chat Application (MERN + Socket.IO)",
      description:
        "A full-stack real-time chat app with authentication, live messaging, and responsive UI.",
      image: project1,
      link: "https://sparkly-fox-8bf700.netlify.app",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description:
        "Doctor availability tracking, appointment booking, and AI-based peak hour predictions.",
      image: project1,
      // link: "https://your-healthcare-demo-link.com",
      tech: ["MERN Stack", "JWT Auth", "AI Integration"],
    },
    {
      id: 3,
      title: "Sports Inventory Management System",
      description:
        "Role-based system for managing sports equipment, borrow/return flows, and low-stock alerts.",
      image: project1,
      // link: "https://your-sports-inventory-demo-link.com",
      tech: ["MERN Stack", "Role-based Access", "MongoDB"],
    },
  ];

  return (
    <div id="projects" className="relative py-20 text-white overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-0 h-64 w-64 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-4 underline"
        >
          My Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-300 mb-12 text-center max-w-2xl mx-auto text-sm sm:text-base"
        >
          A selection of projects that showcase my skills in MERN stack
          development, backend architecture, and real-world problem solving.
        </motion.p>

        {/* Project grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 40, scale: 0.96 }
              }
              transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.7)] bg-[#090717]/90 border border-white/10 backdrop-blur-xl"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Top gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col h-full">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 mb-3 flex-1">
                  {project.description}
                </p>

                {/* Tech pills */}
                {project.tech && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((techItem, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-purple-400/50 bg-purple-500/10 px-2.5 py-1 text-[0.68rem] text-purple-100"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                )}

                {/* Link button (only if link exists) */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <motion.button
                      className="relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 shadow-[0_10px_25px_rgba(0,0,0,0.7)] hover:shadow-purple-500/60 hover:-translate-y-0.5 transition-all duration-300"
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
                      View Project
                    </motion.button>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
