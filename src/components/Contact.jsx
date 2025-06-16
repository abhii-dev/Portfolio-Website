import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaEnvelope, FaGithub, FaRegCopyright, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch("https://formspree.io/f/xldnndzp", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div id='contact' className="container py-12 mx-auto px-4 relative">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-white text-2xl sm:text-4xl font-bold underline text-center'
      >
        What’s on your mind? Let’s connect.
      </motion.h2>

      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
        className='text-gray-400 text-center mt-12'
      >
        Whether it's a collaboration, job opportunity, or an exciting idea — I'd love to hear from you.
      </motion.p>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-md mx-auto p-6 bg-[rgba(19,9,9,0.19)] rounded-xl shadow-md mt-10"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Contact Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 border border-purple-500 rounded-md shadow-sm text-white bg-[rgba(19,9,9,0.19)]"
          />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border border-purple-500 rounded-md shadow-sm text-white bg-[rgba(19,9,9,0.19)]"
          />
          <textarea
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full px-4 py-2 border border-purple-500 rounded-md shadow-sm text-white bg-[rgba(19,9,9,0.19)]"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-700 hover:bg-purple-900 text-white font-semibold rounded-md shadow-md"
          >
            Send
          </button>
          {status && <p className="text-sm text-center mt-4 text-gray-400">{status}</p>}
        </form>
      </motion.div>

      <div className="flex justify-center mt-12 gap-10">
        {[
          { icon: FaInstagram, link: "https://www.instagram.com/abhishek_25___/" },
          { icon: FaTwitter, link: "https://x.com/2504Websta61323" },
          { icon: FaEnvelope, link: "https://mail.google.com/mail/?view=cm&fs=1&to=webstar2504@gmail.com" },
          { icon: FaGithub, link: "https://github.com/abhii-dev" },
          { icon: FaLinkedin, link: "https://www.linkedin.com/in/abhishek2504" },
        ].map(({ icon: Icon, link }, i) => (
          <motion.a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref}
            initial={{ opacity: 0, x: i === 0 ? -100 : i === 4 ? 100 : 0, y: i === 0 || i === 4 ? 0 : 100 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Icon size={40} className="text-purple-500 hover:text-purple-600" />
          </motion.a>
        ))}
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        className='border-t-2 border-purple-500 mt-12 w-full'
      ></motion.div>

      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-gray-400 flex justify-center mt-10 mb-7'
      >
        <FaRegCopyright className='mr-2 mt-1.5 text-purple-500' />
        2024 <span className='text-purple-500 mx-1'>Abhishek G</span> All rights reserved.
      </motion.p>
    </div>
  );
};

export default Contact;
