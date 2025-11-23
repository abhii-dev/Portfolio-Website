// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const Education = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const educompleted = [
//     {
//       id: 1,
//       name: "Mallasajjan English Medium School",
//       duration: "Primary Schooling, LKG – 2nd Std",
//       location: "Dharwad",
//       link: "https://mallasajjan.org/",
//     },
//     {
//       id: 2,
//       name: "Shanti Sadana High School",
//       duration: "Primary & High School, 3rd – 10th",
//       location: "Dharwad",
//       link: "https://www.justdial.com/Dharwad/Shanti-Sadan-School-Navodayanagar/0836PX836-X836-120709131924-E8P8_BZDET",
//     },
//     {
//       id: 3,
//       name: "Prism PU Science College",
//       duration: "Secondary Schooling, 1st & 2nd PU",
//       location: "Dharwad",
//       link: "http://prismtimmanagoudarcollege.com/",
//     },
//     {
//       id: 4,
//       name: "SG Balekundri Institute of Technology",
//       duration: "B.E. in Computer Science & Business Systems",
//       location: "Belagavi",
//       link: "https://sgbit.edu.in/",
//     },
//   ];

//   return (
//     <div
//       id="education"
//       ref={ref}
//       className="relative container mx-auto py-20 px-4 text-white overflow-hidden"
//     >
//       {/* Background glows */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -top-24 left-0 h-64 w-64 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full blur-3xl" />
//       </div>

//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: 60 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ delay: 0.2, duration: 0.5 }}
//         className="text-2xl sm:text-4xl font-bold underline text-center mb-4"
//       >
//         Education
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: 60 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ delay: 0.3, duration: 0.5 }}
//         className="text-gray-300 text-center max-w-2xl mx-auto text-sm sm:text-base mb-10"
//       >
//         A journey through the institutions that shaped my academic foundation
//         and technical growth.
//       </motion.p>

//       {/* Left-aligned timeline */}
//       <div className="relative max-w-3xl mx-auto mt-6">
//         {/* Vertical line */}
//         <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-400 via-gray-600 to-indigo-400 opacity-70" />

//         <div className="space-y-8 pl-10">
//           {educompleted.map((edu, index) => (
//             <motion.div
//               key={edu.id}
//               initial={{ opacity: 0, x: -40 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
//               className="relative flex items-start gap-4"
//             >
//               {/* Dot */}
//               <div className="absolute -left-6 mt-2 h-4 w-4 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 border border-white/60 shadow-[0_0_18px_rgba(168,85,247,0.8)]" />

//               {/* Card */}
//               <div className="w-full bg-[#090717]/80 border border-white/10 backdrop-blur-xl p-5 rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.7)] hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300">
//                 <div className="flex items-center justify-between gap-2 mb-1">
//                   <h3 className="text-purple-300 text-sm font-semibold sm:text-xl">
//                     {edu.name}
//                   </h3>
//                 </div>
//                 <h2 className="text-gray-300 text-xs sm:text-sm mt-1">
//                   {edu.duration}
//                 </h2>
//                 <p className="text-indigo-300 text-xs sm:text-sm mt-1">
//                   {edu.location}
//                 </p>
//                 <a
//                   href={edu.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <motion.button
//                     className="mt-3 px-4 py-2 rounded-full text-xs sm:text-sm overflow-hidden border border-transparent text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 shadow-[0_10px_25px_rgba(0,0,0,0.7)] hover:shadow-purple-500/60 hover:-translate-y-0.5 transition-all duration-300"
//                     initial={{ boxShadow: "0 0 8px #CD1C18" }}
//                     animate={{
//                       boxShadow: ["0 0 8px #CD1C18", "0 0 10px #4B0082"],
//                     }}
//                     transition={{
//                       duration: 1.5,
//                       repeat: Infinity,
//                       repeatType: "reverse",
//                     }}
//                   >
//                     Visit
//                   </motion.button>
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;
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
      {/* Futuristic background glows */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -top-40 -left-10 h-80 w-80 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-10 h-96 w-96 rounded-ful blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.18]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#3b3b6f_1px,transparent_0)] bg-[size:26px_26px]" />
        </div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="flex flex-col items-center gap-3 mb-10"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-purple-300/70">
          Timeline
        </span>
        <h2 className="relative text-2xl sm:text-4xl font-bold text-center">
          Education
          <span className="absolute -inset-x-4 -bottom-2 mx-auto h-[2px] w-24 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full blur-[1px]" />
        </h2>
        <p className="text-gray-300/90 text-center max-w-2xl mx-auto text-sm sm:text-base mt-4">
          A timeline of the places that shaped my curiosity, discipline, and
          technical foundations.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto mt-6">
        {/* Vertical animated line */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={inView ? { height: "100%", opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-300 via-indigo-400 to-fuchsia-400 shadow-[0_0_25px_rgba(129,140,248,0.7)]"
        />

        {/* Floating glow on the timeline */}
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={
            inView
              ? {
                  y: ["0%", "90%", "0%"],
                  opacity: [0, 1, 0],
                }
              : {}
          }
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[7px] top-0 h-4 w-4 rounded-full bg-gradient-to-br from-purple-200 to-indigo-300 blur-sm"
        />

        {/* Education Cards */}
        <div className="space-y-8 pl-10">
          {educompleted.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -40, scale: 0.96 }}
              animate={
                inView
                  ? { opacity: 1, x: 0, scale: 1 }
                  : { opacity: 0, x: -40, scale: 0.96 }
              }
              transition={{ delay: 0.15 + index * 0.18, duration: 0.5 }}
              className="relative flex items-start gap-4"
            >
              {/* Node dot */}
              <div className="absolute -left-6 mt-3 flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-slate-900 border border-purple-400/60 shadow-[0_0_16px_rgba(167,139,250,0.9)] flex items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 animate-pulse" />
                </div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -2, // reduced hover
                  boxShadow:
                    "0 14px 28px rgba(0,0,0,0.55), 0 0 18px rgba(129,140,248,0.25)",
                }}
                transition={{ duration: 0.25 }}
                className="w-full relative bg-gradient-to-br from-[#060513]/95 via-[#050412]/95 to-[#03010c]/95 border border-white/10 backdrop-blur-2xl p-5 rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.75)] group"
              >
                {/* Inner subtle border */}
                <div className="pointer-events-none absolute inset-[1px] rounded-2xl border border-white/5 group-hover:border-purple-400/30 transition-colors duration-300" />

                <div className="relative flex flex-col gap-2">
                  {/* Title row */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-xl font-semibold text-purple-100 tracking-tight">
                      {edu.name}
                    </h3>
                    <span className="text-[10px] sm:text-xs px-2 py-1 rounded-full bg-purple-500/10 border border-purple-300/30 text-purple-200/90 whitespace-nowrap">
                      #{String(edu.id).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-[11px] sm:text-xs text-gray-300/90 mt-1">
                    {edu.duration}
                  </p>

                  <p className="text-xs sm:text-sm text-indigo-300/90 flex items-center gap-1">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                    {edu.location}
                  </p>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="flex flex-col text-[10px] sm:text-xs text-gray-400/90">
                      <span className="uppercase tracking-[0.18em] text-[9px] text-gray-500/90">
                        Phase
                      </span>
                      <span className="mt-0.5 text-gray-200/90">
                        Academic Milestone
                      </span>
                    </div>

                    <a href={edu.link} target="_blank" rel="noopener noreferrer">
                      <motion.button
                        className="relative mt-1 px-4 py-2 rounded-full text-xs sm:text-sm overflow-hidden border border-purple-400/60 text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 shadow-[0_10px_25px_rgba(0,0,0,0.8)] group/button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <span>Visit</span>
                          <span className="text-xs opacity-90">↗</span>
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-white/15 via-transparent to-white/15 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
                      </motion.button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
