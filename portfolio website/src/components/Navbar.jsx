import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"; // keep consistent with rest of app
import { Link } from "react-scroll";
import resume from "../assets/resume.pdf";

const Navbar = () => {
  const variants = {
    open: {
      clipPath: "circle(1200px at 43px 43px)",
      transition: { type: "spring", duration: 0.8 },
    },
    closed: {
      clipPath: "circle(25px at 43px 37px)",
      transition: { type: "spring", duration: 0.8 },
    },
  };

  const [menu, setMenu] = useState(false);

  const items = [
    { id: 1, text: "About", to: "about" },
    { id: 2, text: "Projects", to: "projects" },
    { id: 3, text: "Contact", to: "contact" },
    { id: 4, text: "Education", to: "education" },
  ];

  return (
    <div className="w-full z-30">
      {/* Desktop navbar */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex justify-center pt-4"
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-3 rounded-full bg-[#05040b]/80 border border-white/10 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
          {/* Logo */}
          <div className="text-xl lg:text-2xl flex font-bold items-center gap-1">
            <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-[0.2em] uppercase text-gray-300">
              Portfolio
            </span>
            <span className="hidden sm:inline text-purple-400">Website</span>
          </div>

          {/* Nav links */}
          <ul className="hidden md:flex text-white space-x-6 lg:text-lg md:text-sm list-none items-center">
            {items.map(({ id, text, to }) => (
              <li
                key={id}
                className="cursor-pointer relative group font-medium"
              >
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="hover:text-purple-400 transition-colors duration-200"
                >
                  {text}
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 group-hover:w-full transition-all duration-300" />
              </li>
            ))}
          </ul>

          {/* Resume button */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="md:text-sm lg:text-base text-white rounded-full px-4 py-2 font-medium bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-purple-500/60 hover:-translate-y-0.5 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Mobile navbar */}
      <div className="flex md:hidden justify-between items-center px-4 py-4">
        {/* Mobile menu */}
        <motion.div animate={menu ? "open" : "closed"} className="z-20">
          <motion.div
            variants={variants}
            className="fixed top-0 left-0 w-2/3 h-screen bg-[#05040b]/95 border-r border-white/10 backdrop-blur-xl text-white"
          >
            {/* Menu icon */}
            <button
              onClick={() => setMenu((open) => !open)}
              className="px-4 py-4 text-2xl"
              aria-label="Toggle navigation menu"
            >
              {menu ? <IoMdClose /> : <LuMenu />}
            </button>

            {/* Menu content */}
            {menu && (
              <div className="mt-10 flex flex-col justify-center items-center gap-10">
                <ul className="text-lg text-white space-y-6 text-center">
                  {items.map(({ id, text, to }) => (
                    <li
                      key={id}
                      className="hover:text-purple-400 duration-200 cursor-pointer font-medium"
                    >
                      <Link
                        to={to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={() => setMenu(false)}
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:shadow-purple-500/60 text-white px-4 py-2 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.7)] !cursor-pointer"
                >
                  Download Resume
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Mobile logo */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base font-bold flex items-center gap-2"
        >
          <span className="text-white">PORTFOLIO</span>
          <span className="text-purple-400">WEBSITE</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
