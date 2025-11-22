import React from "react";
import { FaNodeJs, FaJava } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const nodeSkills = [
    "React.js UI",
    "Node.js & Express",
    "MongoDB & Mongoose",
    "JWT / OAuth Auth",
    "Real-time (Socket.io / WebRTC)",
  ];

  const javaSkills = [
    "Core & OOP Java",
    "Advanced Java (Servlets/JSP)",
    "Spring Boot APIs",
    "SQL Databases",
    "Hibernate / JPA",
  ];

  return (
    <div className="relative text-white py-20 overflow-hidden">
      {/* Background glow elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-10 h-64 w-64 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-1 text-xs uppercase tracking-[0.15em] text-purple-200">
            What I Do
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-wide">
            Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-gray-300">
            I build full-stack solutions in both{" "}
            <span className="text-purple-300 font-semibold">Node.js</span> and{" "}
            <span className="text-purple-300 font-semibold">Java</span>,
            focusing on clean architecture, performance, and real-world use cases.
          </p>
        </motion.div>

        {/* Two stylish cards side by side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* Node.js / MERN Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="group relative"
          >
            {/* Gradient glow border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/60 via-fuchsia-500/50 to-indigo-500/60 opacity-40 blur-xl group-hover:opacity-80 group-hover:blur-2xl transition-all duration-500"></div>

            {/* Card content */}
            <div className="relative h-full rounded-3xl bg-[#090717]/80 border border-white/10 backdrop-blur-xl p-6 md:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/20 border border-purple-400/40">
                  <FaNodeJs className="text-2xl text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Backend & Full-Stack – Node.js
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400">
                    MERN stack apps with real-time features and secure APIs.
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-gray-200 mb-5">
                From frontend UI in React to backend logic in Node.js, I build
                complete web apps with authentication, APIs, and real-time
                communication.
              </p>

              <div className="flex flex-wrap gap-2">
                {nodeSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1 text-xs text-purple-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Java Backend Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="group relative"
          >
            {/* Gradient glow border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/60 via-blue-500/50 to-cyan-500/60 opacity-40 blur-xl group-hover:opacity-80 group-hover:blur-2xl transition-all duration-500"></div>

            {/* Card content */}
            <div className="relative h-full rounded-3xl bg-[#070b16]/80 border border-white/10 backdrop-blur-xl p-6 md:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-400/40">
                  <FaJava className="text-2xl text-orange-300" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Backend Development – Java
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400">
                    Enterprise-style APIs with Spring Boot and SQL.
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-gray-200 mb-5">
                I design stable Java backends using Spring Boot, Hibernate, and
                relational databases, suitable for scalable and enterprise-grade
                applications.
              </p>

              <div className="flex flex-wrap gap-2">
                {javaSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
