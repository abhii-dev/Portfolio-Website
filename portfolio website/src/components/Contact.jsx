import React, { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaGithub,
  FaRegCopyright,
  FaLinkedin,
  FaUser,
  FaAt,
  FaCommentDots,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xldnndzp", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Error occurred. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      ref={ref}
      className="relative container mx-auto py-20 px-4 text-white overflow-hidden"
    >
      {/* Background glows + subtle grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-[-40px] h-64 w-64 rounded-full blur-3xl" />
        <div className="absolute bottom-[-40px] right-[-40px] h-72 w-72 rounded-full blur-3xl" />
        <div className="absolute inset-x-1/3 top-1/4 h-60 w-60 rounded-full bg-purple-600/25 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        {/* Neon orb */}
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_28px_rgba(129,140,248,0.9)]" />
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-wide text-center">
          Let&apos;s Connect
        </h2>
        <div className="h-[2px] w-24 sm:w-32 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />
      </motion.div>

      {/* Main card with neon frame */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-10 max-w-3xl mx-auto"
      >
        <div className="relative rounded-[26px] p-[1.5px] bg-[#090717]/80 from-purple-500 via-fuchsia-500 to-indigo-500 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
          <div className="relative rounded-[24px] bg-[#050312]/95 border border-white/10 backdrop-blur-2xl overflow-hidden">
            {/* Animated scan line */}
            <motion.div
              className="absolute top-0 left-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              initial={{ x: "-30%" }}
              animate={{ x: ["-30%", "130%"] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />

            {/* Corner accents */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-4 top-4 h-6 w-6 border-l border-t border-white/20 rounded-tl-[18px]" />
              <div className="absolute right-4 top-4 h-6 w-6 border-r border-t border-white/20 rounded-tr-[18px]" />
              <div className="absolute left-4 bottom-4 h-6 w-6 border-l border-b border-white/20 rounded-bl-[18px]" />
              <div className="absolute right-4 bottom-4 h-6 w-6 border-r border-b border-white/20 rounded-br-[18px]" />
            </div>

            <div className="relative p-6 sm:p-8 flex flex-col gap-6">
              {/* Small tag row */}
              <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-purple-200/80">
                <span className="rounded-full bg-purple-500/10 px-3 py-1 border border-purple-400/40">
                  Contact
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-gray-300 mb-1">
                      Name<span className="text-purple-400"> *</span>
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                        <FaUser />
                      </span>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="mt-1 w-full pl-9 pr-4 py-2.5 rounded-lg text-sm sm:text-base text-white bg-black/40 border border-white/15 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/80 focus:ring-offset-2 focus:ring-offset-[#050312] focus:border-transparent transition-all placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-gray-300 mb-1">
                      Email<span className="text-purple-400"> *</span>
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                        <FaAt />
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="mt-1 w-full pl-9 pr-4 py-2.5 rounded-lg text-sm sm:text-base text-white bg-black/40 border border-white/15 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/80 focus:ring-offset-2 focus:ring-offset-[#050312] focus:border-transparent transition-all placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-gray-300 mb-1">
                    Message<span className="text-purple-400"> *</span>
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3 top-3 text-gray-400 text-xs">
                      <FaCommentDots />
                    </span>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      className="mt-1 w-full pl-9 pr-4 py-2.5 rounded-lg text-sm sm:text-base text-white bg-black/40 border border-white/15 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/80 focus:ring-offset-2 focus:ring-offset-[#050312] focus:border-transparent transition-all resize-none placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 px-4 rounded-full text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 shadow-[0_10px_30px_rgba(0,0,0,0.9)] hover:shadow-fuchsia-500/80 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 tracking-wide"
                >
                  Send
                </motion.button>

                {status && (
                  <p className="text-sm text-center mt-3 text-gray-300">
                    {status}
                  </p>
                )}
              </form>

              {/* Social icons row */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex justify-center gap-4 sm:gap-5 flex-wrap">
                  <motion.a
                    href="https://www.instagram.com/abhishek_25___/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12, y: -2 }}
                    className="p-2.5 rounded-xl bg-white/5 border border-purple-500/40 shadow-[0_8px_22px_rgba(0,0,0,0.8)] backdrop-blur-md"
                  >
                    <FaInstagram size={20} className="text-purple-300" />
                  </motion.a>

                  <motion.a
                    href="https://x.com/2504Websta61323"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12, y: -2 }}
                    className="p-2.5 rounded-xl bg-white/5 border border-purple-500/40 shadow-[0_8px_22px_rgba(0,0,0,0.8)] backdrop-blur-md"
                  >
                    <FaTwitter size={20} className="text-purple-300" />
                  </motion.a>

                  <motion.a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=webstar2504@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12, y: -2 }}
                    className="p-2.5 rounded-xl bg-white/5 border border-purple-500/40 shadow-[0_8px_22px_rgba(0,0,0,0.8)] backdrop-blur-md"
                  >
                    <FaEnvelope size={20} className="text-purple-300" />
                  </motion.a>

                  <motion.a
                    href="https://github.com/abhii-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12, y: -2 }}
                    className="p-2.5 rounded-xl bg-white/5 border border-purple-500/40 shadow-[0_8px_22px_rgba(0,0,0,0.8)] backdrop-blur-md"
                  >
                    <FaGithub size={20} className="text-purple-300" />
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/abhishek2504"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12, y: -2 }}
                    className="p-2.5 rounded-xl bg-white/5 border border-purple-500/40 shadow-[0_8px_22px_rgba(0,0,0,0.8)] backdrop-blur-md"
                  >
                    <FaLinkedin size={20} className="text-purple-300" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Divider + footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="mt-12"
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-4" />
        <p className="text-gray-400 flex items-center justify-center mb-4 text-xs sm:text-sm">
          <FaRegCopyright className="mr-2 text-purple-500" />
          2025 <span className="text-purple-500 mx-1">Abhishek G</span> All
          rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
