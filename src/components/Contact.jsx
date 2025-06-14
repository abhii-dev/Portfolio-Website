import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaEnvelope, FaGithub, FaRegCopyright, FaLinkedin } from "react-icons/fa";
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {

    const{ref, inView} =useInView({
        triggerOnce:true,
        threshold:0.2
    })
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
      setStatus('Error occurred. Please try again.');
    }
  };
 


  return (
    <div>
        <div id='contact' className="container py-12 mx-auto relative px-4">
            <motion.h2 
            ref={ref}
            initial={{opacity:0, y:100}}
            animate={ inView ? {opacity:1, y:0}  : {}}
            transition={{delay:0.3, duration:0.5}}
            className='text-white text-2xl sm:text-4xl font-bold underline text-center'>What do you have in mind? Let's Discuss</motion.h2>
            <motion.p 
            ref={ref}
            initial={{opacity:0, y:100}}
            animate={ inView ? {opacity:1, y:0}  : {}}
            transition={{delay:0.4, duration:0.5}}
            className='text-gray-400 text-center mt-12'>Feel free to reach out to me for collaboration, job opportunities, or any exciting projects—let's build something great together!</motion.p>



            <motion.div 
             ref={ref}
            initial={{opacity:0, y:100}}
            animate={ inView ? {opacity:1, y:0}  : {}}
            transition={{delay:0.3, duration:0.5}}
            className="max-w-md mx-auto p-6 bg-[rgba(19,9,9,0.19)] rounded-xl shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
              
                <input
                  type="text"
                  name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
            className="mt-1 w-full px-4 py-2 border border-purple-500  rounded-md shadow-sm text-white bg-[rgba(19,9,9,0.19)] "
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            className="mt-1 w-full px-4 py-2 border border-purple-500  rounded-md shadow-sm text-white bg-[rgba(19,9,9,0.19)]"
          />
        </div>
        <div>
          <textarea
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
            className="mt-1 w-full px-4 py-2 border border-purple-500  rounded-md shadow-sm text-white bg-[rgba(19,9,9,0.19)]"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-purple-700 hover:bg-purple-900 text-white font-semibold rounded-md shadow-md"
        >
          Send
        </button>
        {status && <p className="text-sm text-center mt-4 text-gray-400">{status}</p>}
      </form>
      
    </motion.div>
   

                <div className='flex justify-center mt-12 gap-10'>

                <a href="https://www.instagram.com/abhishek_25___/" target="_blank" rel="noopener noreferrer">
                <motion.button
                ref={ref}
                initial={{opacity:0, x:-100}}
                animate={ inView ? {opacity:1, x:0}  : {}}
                transition={{delay:0.3, duration:0.5}}
                >
                <FaInstagram size={40} className="text-purple-500 hover:text-purple-600" />
                </motion.button>
                </a>

                <a href="https://x.com/2504Websta61323" target="_blank" rel="noopener noreferrer">
                <motion.button
                ref={ref}
                initial={{opacity:0, y:100}}
                animate={ inView ? {opacity:1, y:0}  : {}}
                transition={{delay:0.3, duration:0.5}}
                >
                <FaTwitter size={40} className="text-purple-500 hover:text-purple-600" />
                </motion.button>
                </a>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=webstar2504@gmail.com" target="_blank" rel="noopener noreferrer">
                <motion.button
                 ref={ref}
                 initial={{opacity:0, y:100}}
                 animate={ inView ? {opacity:1, y:0}  : {}}
                 transition={{delay:0.3, duration:0.5}}
                >
                <FaEnvelope size={40} className="text-purple-500 hover:text-purple-600" />
                </motion.button>
                </a>

                <a href="https://github.com/abhii-dev" target="_blank" rel="noopener noreferrer">
                <motion.button
                 ref={ref}
                 initial={{opacity:0, y:100}}
                 animate={ inView ? {opacity:1, y:0}  : {}}
                 transition={{delay:0.3, duration:0.5}}
                >
                <FaGithub size={40} className="text-purple-500 hover:text-purple-600" />
                </motion.button>
                </a>

                <a href="https://www.linkedin.com/in/abhishek2504" target="_blank" rel="noopener noreferrer">
                <motion.button
                 ref={ref}
                 initial={{opacity:0, x:100}}
                 animate={ inView ? {opacity:1, x:0}  : {}}
                 transition={{delay:0.3, duration:0.5}}
                >
                <FaLinkedin size={40} className="text-purple-500 hover:text-purple-600" />
                </motion.button>
                </a>
            </div>
              <motion.div
            ref={ref}
            initial={{opacity:0, x:-100}}
            animate={ inView ? {opacity:1, x:0}  : {}}
            transition={{delay:0.3, duration:0.8}}
            className='border-t-2 border-purple-500  mt-12 w-full'
            ></motion.div>
            <motion.p
            ref={ref}
            initial={{opacity:0, y:100}}
            animate={ inView ? {opacity:1, y:0}  : {}}
            transition={{delay:0.3, duration:0.5}}
            className='text-gray-400 flex text-center justify-center mt-10 mb-7'><FaRegCopyright className='mr-2 mt-1.5 text-purple-500' /> 2024 <span className='text-purple-500 mr-1.5 ml-1.5'>Abhishek G</span> All rights reserved.</motion.p>
           
        </div>
    </div>
  )
}

export default Contact