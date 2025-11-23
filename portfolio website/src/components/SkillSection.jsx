import React, { useState } from "react";
import jslogo from "../assets/javascript.png";
import reactlogo from "../assets/react.png";
import expresslogo from "../assets/express.png";
import mongologo from "../assets/mongo.png";
import nodejslogo from "../assets/nodejs.png";
import javalogo from "../assets/java.png";   // make sure these exist
import sqllogo from "../assets/sql.png";     // or rename imports
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const tabs = [
  {
    id: "frontend",
    label: "Frontend",
    tag: "React · JavaScript",
    description:
      "I build responsive, interactive UIs with React and modern JavaScript, focusing on clean components, state management, and smooth UX.",
    points: [
      "SPA development with React, hooks, and props",
      "Reusable component patterns and layout systems",
      "State management with hooks and lifting state up",
    ],
    logos: [
      { src: jslogo, alt: "JavaScript" },
      { src: reactlogo, alt: "React" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    tag: "Node.js · Express.js",
    description:
      "I design REST APIs, work with middleware, and implement auth and routing using Node.js and Express.",
    points: [
      "RESTful API design and routing",
      "Auth, middleware, and error handling",
      "Working with JSON, JWT, and request validation",
    ],
    logos: [
      { src: nodejslogo, alt: "Node.js" },
      { src: expresslogo, alt: "Express" },
    ],
  },
  {
    id: "database",
    label: "Database",
    tag: "MongoDB · SQL",
    description:
      "Comfortable with both NoSQL and relational databases — from schema design to querying and performance considerations.",
    points: [
      "Designing collections / tables for real projects",
      "Writing queries, filters, and aggregations",
      "Relating backend logic with database models",
    ],
    logos: [
      { src: mongologo, alt: "MongoDB" },
      { src: sqllogo, alt: "SQL" },
    ],
  },
  {
    id: "core",
    label: "Core Java & CS",
    tag: "Core Java · OOP · DSA",
    description:
      "I use Core Java to strengthen computer science fundamentals, focusing on OOP, data structures, and problem solving.",
    points: [
      "Object-oriented design (classes, interfaces, inheritance)",
      "Working with common data structures and algorithms",
      "Writing clean, structured, and maintainable code",
    ],
    logos: [{ src: javalogo, alt: "Core Java" }],
  },
];

const SkillSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { delay, duration: 0.5 },
  });

  const current = tabs.find((t) => t.id === activeTab);

  return (
    <div
      id="skills"
      ref={ref}
      className="relative w-full flex flex-col items-center py-20 text-white overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-0 h-64 w-64 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full blur-3xl" />
      </div>

      {/* Heading */}
      <motion.h2
        {...fadeUp(0.2)}
        className="text-3xl sm:text-4xl font-bold underline mb-3 text-center"
      >
        My Skills
      </motion.h2>

      <motion.p
        {...fadeUp(0.3)}
        className="text-gray-300 text-center max-w-xl mx-auto text-sm sm:text-base mb-8 px-4"
      >
        A full-stack skillset built around React, Node.js, databases, and strong
        Core Java & SQL fundamentals.
      </motion.p>

      {/* Small pill row */}
      <motion.div
        {...fadeUp(0.35)}
        className="flex flex-wrap justify-center gap-2 mb-10 px-4"
      >
        <span className="rounded-full border border-purple-400/60 bg-purple-500/10 px-3 py-1 text-xs sm:text-sm text-purple-100">
          React · JavaScript
        </span>
        <span className="rounded-full border border-indigo-400/60 bg-indigo-500/10 px-3 py-1 text-xs sm:text-sm text-indigo-100">
          Node.js · Express.js
        </span>
        <span className="rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1 text-xs sm:text-sm text-emerald-100">
          MongoDB · SQL
        </span>
        <span className="rounded-full border border-pink-400/60 bg-pink-500/10 px-3 py-1 text-xs sm:text-sm text-pink-100">
          Core Java · OOP · DSA
        </span>
      </motion.div>

      {/* Tabs layout */}
      <motion.div
        {...fadeUp(0.4)}
        className="w-full max-w-5xl px-4 grid gap-6 md:grid-cols-[0.9fr,1.6fr] items-start"
      >
        {/* Left side: Tabs */}
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-xl p-3 sm:p-4">
          <p className="text-xs text-gray-400 mb-3 px-1">
            Select a category to see how I work in that area.
          </p>
          <div className="flex md:flex-col gap-2">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group flex-1 md:flex-none text-left rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm transition-all ${
                    isActive
                      ? "border-purple-400/70 bg-purple-500/15 shadow-[0_0_25px_-10px_rgba(168,85,247,0.8)]"
                      : "border-white/10 bg-white/5 hover:border-purple-300/50 hover:bg-purple-500/5"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">{tab.label}</span>
                    <span className="text-[10px] text-gray-400 group-hover:text-purple-200 line-clamp-1">
                      {tab.tag}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right side: Active content */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-xl p-5 sm:p-6 shadow-[0_0_40px_-18px_rgba(59,130,246,0.9)]"
        >
          <div className="flex items-center justify-between gap-3 mb-3">
            <h3 className="text-lg sm:text-xl font-semibold">
              {current.label}
            </h3>
            <span className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/15 text-gray-200">
              {current.tag}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 mb-4">
            {current.description}
          </p>

          <ul className="space-y-2.5 mb-5">
            {current.points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm text-gray-200"
              >
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-purple-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4">
            {current.logos.map((logo) => (
              <div
                key={logo.alt}
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-slate-900/80 flex items-center justify-center border border-white/10"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-7 w-7 object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillSection;
