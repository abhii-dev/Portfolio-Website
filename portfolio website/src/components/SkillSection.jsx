import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import RotatingLogo from "./RotatingLogo";
import htmllogo from "../assets/html.png";
import csslogo from "../assets/css.png";
import jslogo from "../assets/javascript.png";
import reactlogo from "../assets/react.png";
import expresslogo from "../assets/express.png";
import mongologo from "../assets/mongo.png";
import nodejslogo from "../assets/nodejs.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const logos = [
    { texture: htmllogo, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { texture: csslogo, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { texture: jslogo, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { texture: reactlogo, link: "https://react.dev/" },
    { texture: expresslogo, link: "https://expressjs.com/" },
    { texture: mongologo, link: "https://www.mongodb.com/" },
    { texture: nodejslogo, link: "https://nodejs.org/en" },
  ];

  const [layout, setLayout] = useState("row");
  const [columns, setColumns] = useState(3);
  const [xOffset, setXOffset] = useState(0);
  const [spacing, setSpacing] = useState(13);

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) {
        setLayout("grid");
        setColumns(3);
        setSpacing(8);
        setXOffset(4);
      } else if (window.innerWidth < 1024) {
        setLayout("row");
        setColumns(3);
        setXOffset(1.2);
        setSpacing(10);
      } else {
        setLayout("row");
        setXOffset(-2);
        setSpacing(13);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <div
      id="skills"
      ref={ref}
      className="relative w-full flex flex-col items-center py-20 text-white overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-0 h-64 w-64 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      {/* Heading + subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold underline mb-3 text-center max-sm:text-2xl"
      >
        My Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-300 text-center max-w-xl mx-auto text-sm sm:text-base mb-8 px-4"
      >
        A visual representation of my core tech stack using interactive 3D
        elements — combining frontend, backend, and database technologies.
      </motion.p>

      {/* Small pill row to match other sections */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-2 mb-8 px-4"
      >
        <span className="rounded-full border border-purple-400/60 bg-purple-500/10 px-3 py-1 text-xs sm:text-sm text-purple-100">
          Frontend: HTML, CSS, JavaScript, React
        </span>
        <span className="rounded-full border border-indigo-400/60 bg-indigo-500/10 px-3 py-1 text-xs sm:text-sm text-indigo-100">
          Backend: Node.js, Express.js
        </span>
        <span className="rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1 text-xs sm:text-sm text-emerald-100">
          Database: MongoDB
        </span>
      </motion.div>

      {/* Canvas for 3D logos */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full flex justify-center"
      >
        <Canvas
          camera={{ position: [0, 0, 10] }}
          className="h-[280px] sm:h-[380px] md:h-[420px]"
        >
          <ambientLight intensity={0.5} />
          {logos.map((logo, index) => {
            let position;
            if (layout === "row") {
              position = [
                index * spacing - ((logos.length - 1) * spacing) / 2 + xOffset,
                -1.5,
                0,
              ];
            } else {
              const row = Math.floor(index / columns);
              const col = index % columns;
              position = [
                col * spacing - (columns * spacing) / 2 + xOffset,
                -row * spacing + 3,
                0,
              ];
            }
            return (
              <RotatingLogo
                key={index}
                textureUrl={logo.texture}
                position={position}
                link={logo.link}
              />
            );
          })}
        </Canvas>
      </motion.div>
    </div>
  );
};

export default SkillSection;
