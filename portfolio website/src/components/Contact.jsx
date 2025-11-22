import React, { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaGithub,
  FaRegCopyright,
  FaLinkedin,
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
        className="text-2xl sm:text-4xl font-bold underline text-center"
      >
        What do you have in mind? Let&apos;s Discuss
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-300 text-center mt-6 max-w-2xl mx-auto text-sm sm:text-base"
      >
        Feel free to reach out for collaborations, job opportunities, or any
        exciting projects — let&apos;s build something great together!
      </motion.p>

      {/* Contact form card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-md mx-auto mt-10 p-6 rounded-2xl bg-[#090717]/85 border border-white/10 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
      >
        <h3 className="text-2xl font-bold mb-6 text-center">Contact Me</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="mt-1 w-full px-4 py-2 rounded-md text-sm sm:text-base text-white bg-black/20 border border-purple-500/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="mt-1 w-full px-4 py-2 rounded-md text-sm sm:text-base text-white bg-black/20 border border-purple-500/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="mt-1 w-full px-4 py-2 rounded-md text-sm sm:text-base text-white bg-black/20 border border-purple-500/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-full text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-purple-500/60 hover:-translate-y-0.5 transition-all duration-300"
          >
            Send
          </button>
          {status && (
            <p className="text-sm text-center mt-3 text-gray-300">{status}</p>
          )}
        </form>
      </motion.div>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex justify-center mt-12 gap-8 flex-wrap"
      >
        <a
          href="https://www.instagram.com/abhishek_25___/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.15, y: -3 }}
            className="p-2 rounded-full bg-white/5 border border-purple-500/40 shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
          >
            <FaInstagram size={32} className="text-purple-400" />
          </motion.div>
        </a>

        <a
          href="https://x.com/2504Websta61323"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.15, y: -3 }}
            className="p-2 rounded-full bg-white/5 border border-purple-500/40 shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
          >
            <FaTwitter size={32} className="text-purple-400" />
          </motion.div>
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=webstar2504@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.15, y: -3 }}
            className="p-2 rounded-full bg-white/5 border border-purple-500/40 shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
          >
            <FaEnvelope size={32} className="text-purple-400" />
          </motion.div>
        </a>

        <a
          href="https://github.com/abhii-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.15, y: -3 }}
            className="p-2 rounded-full bg-white/5 border border-purple-500/40 shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
          >
            <FaGithub size={32} className="text-purple-400" />
          </motion.div>
        </a>

        <a
          href="https://www.linkedin.com/in/abhishek2504"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.15, y: -3 }}
            className="p-2 rounded-full bg-white/5 border border-purple-500/40 shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
          >
            <FaLinkedin size={32} className="text-purple-400" />
          </motion.div>
        </a>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-12 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
      />

      {/* Footer text */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="text-gray-400 flex items-center justify-center mt-8 mb-4 text-xs sm:text-sm"
      >
        <FaRegCopyright className="mr-2 text-purple-500" />
        2024 <span className="text-purple-500 mx-1">Abhishek G</span> All
        rights reserved.
      </motion.p>
    </div>
  );
};

export default Contact;
