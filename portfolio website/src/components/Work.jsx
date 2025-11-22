// import React from "react";
// import project1 from "../assets/project1.png";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const Work = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const project = {
//     id: 1,
//     title: "Real-Time Chat Application (MERN + Socket.IO)",
//     description:
//       "A full-stack real-time chat application with user authentication, live messaging, unread message tracking, and a responsive dark UI built with MERN and Socket.IO.",
//     image: project1,
//     link: "https://sparkly-fox-8bf700.netlify.app",
//     tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "Tailwind CSS"],
//   };

//   return (
//     <div id="projects" className="relative py-20 text-white overflow-hidden">
//       {/* Background glows */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -top-24 left-0 h-64 w-64 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl" />
//       </div>

//       <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="text-3xl sm:text-4xl font-bold text-center mb-4 underline"
//         >
//           Featured Project
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 60 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="text-gray-300 mb-12 text-center max-w-2xl mx-auto text-sm sm:text-base"
//         >
//           A closer look at one of my favorite builds — a real-time chat
//           application that brings together authentication, live messaging,
//           and a clean dark UI.
//         </motion.p>

//         {/* Single featured project card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40, scale: 0.97 }}
//           animate={
//             inView
//               ? { opacity: 1, y: 0, scale: 1 }
//               : { opacity: 0, y: 40, scale: 0.97 }
//           }
//           transition={{ delay: 0.4, duration: 0.5 }}
//           className="group relative rounded-2xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.7)] bg-[#090717]/90 border border-white/10 backdrop-blur-xl"
//         >
//           <div className="flex flex-col md:flex-row">
//             {/* Image */}
//             <div className="relative md:w-1/2 h-52 sm:h-64 md:h-auto overflow-hidden">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none" />
//             </div>

//             {/* Content */}
//             <div className="md:w-1/2 p-6 sm:p-7 flex flex-col justify-center">
//               <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">
//                 {project.title}
//               </h3>

//               <p className="text-xs sm:text-sm text-gray-200 mb-4">
//                 {project.description}
//               </p>

//               {/* Tech pills */}
//               {project.tech && (
//                 <div className="flex flex-wrap gap-2 mb-5">
//                   {project.tech.map((techItem, idx) => (
//                     <span
//                       key={idx}
//                       className="rounded-full border border-purple-400/50 bg-purple-500/10 px-2.5 py-1 text-[0.68rem] text-purple-100"
//                     >
//                       {techItem}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Link button */}
//               {project.link && (
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex"
//                 >
//                   <motion.button
//                     className="relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium 
//                                bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 
//                                shadow-[0_10px_25px_rgba(0,0,0,0.7)] 
//                                hover:shadow-purple-500/60 hover:-translate-y-0.5 
//                                transition-all duration-300"
//                     initial={{ boxShadow: "0 0 8px #CD1C18" }}
//                     animate={{
//                       boxShadow: ["0 0 8px #CD1C18", "0 0 12px #4B0082"],
//                     }}
//                     transition={{
//                       duration: 1.5,
//                       repeat: Infinity,
//                       repeatType: "reverse",
//                     }}
//                   >
//                     View Live Demo
//                   </motion.button>
//                 </a>
//               )}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Work;


import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Work = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const project = {
    id: 1,
    title: "Real-Time Chat Application (MERN + Socket.IO)",
    description:
      "A full-stack real-time chat application with user authentication, live messaging, unread message tracking, and a responsive dark UI built with MERN and Socket.IO.",
    link: "https://sparkly-fox-8bf700.netlify.app",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
    ],
  };

  return (
    <div id="projects" className="relative py-20 text-white overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-0 h-64 w-64 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-4 underline"
        >
          Featured Project
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-300 mb-12 text-center max-w-2xl mx-auto text-sm sm:text-base"
        >
          A closer look at one of my favorite builds — a real-time chat
          application that brings together authentication, live messaging,
          and a clean dark UI.
        </motion.p>

        {/* Single featured project card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={
            inView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 40, scale: 0.97 }
          }
          transition={{ delay: 0.4, duration: 0.5 }}
          className="group relative rounded-2xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.7)] bg-[#090717]/90 border border-white/10 backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row">
            {/* LEFT: Neon Gradient Orb */}
            <div className="md:w-1/2 p-6 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={
                  inView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 20, scale: 0.95 }
                }
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative w-52 h-52 sm:w-64 sm:h-64"
              >
                {/* Outer soft glow */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-br from-purple-500/40 via-fuchsia-500/30 to-indigo-500/40"
                  animate={{ opacity: [0.5, 0.9, 0.5] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* Main orb */}
                <motion.div
                  className="absolute inset-6 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-400 to-cyan-400 shadow-[0_0_45px_rgba(168,85,247,0.8)]"
                  animate={{
                    y: [-6, 6, -6],
                    x: [-3, 3, -3],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* Inner core */}
                <motion.div
                  className="absolute inset-16 rounded-full bg-[#05040b] shadow-[0_0_60px_rgba(129,140,248,0.7)] border border-purple-300/40 flex items-center justify-center"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <div className="text-center px-3">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-purple-200/80">
                      Real-time
                    </p>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-purple-100">
                      Chat Application
                    </p>
                    <p className="mt-2 text-[10px] text-gray-300/80">
                      MERN • Socket.IO • JWT
                    </p>
                  </div>
                </motion.div>

                {/* Tiny orbiting dot */}
                <motion.div
                  className="absolute h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]"
                  style={{ top: "8%", left: "50%" }}
                  animate={{
                    rotate: 360,
                    translateX: 70,
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>

            {/* RIGHT: Text content */}
            <div className="md:w-1/2 p-6 sm:p-7 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-200 mb-4">
                {project.description}
              </p>

              {/* Tech pills */}
              {project.tech && (
                <div className="flex flex-wrap gap-2 mb-5">
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

              {/* Link button */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <motion.button
                    className="relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium 
                               bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 
                               shadow-[0_10px_25px_rgba(0,0,0,0.7)] 
                               hover:shadow-purple-500/60 hover:-translate-y-0.5 
                               transition-all duration-300"
                    initial={{ boxShadow: "0 0 8px #CD1C18" }}
                    animate={{
                      boxShadow: ["0 0 8px #CD1C18", "0 0 12px #4B0082"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    View Live Demo
                  </motion.button>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
