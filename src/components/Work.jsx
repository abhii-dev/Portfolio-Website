import React from 'react';
import project1 from '../assets/project1.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Work = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.01 });
  const { ref: subHeadingRef, inView: subHeadingInView } = useInView({ triggerOnce: true, threshold: 0.01 });

  const projects = [
    {
      id: 1,
      title: "ChatApp Project",
      description: "A real-time MERN stack chat app using Socket.IO, Multer, and AI.",
      image: project1,
      link: 'https://sparkly-fox-8bf700.netlify.app',
    },
    {
      id: 2,
      title: "Hospital Management System",
      description: "AI-powered hospital system with EHR, patient records & real-time doctor status.",
      image: project1,
    },
    {
      id: 3,
      title: "Inventory Management",
      description: "Sports club inventory app with request & return tracking, built in MERN.",
      image: project1,
    }
  ];

  return (
    <div id='projects' className='py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 100 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='text-4xl text-white underline font-bold text-center mb-12'>
          My Work
        </motion.h2>

        <motion.p
          ref={subHeadingRef}
          initial={{ opacity: 0, y: 100 }}
          animate={subHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className='text-gray-400 mb-12 text-center'>
          These are the Projects that showcase my skills in MERN Stack Development.
        </motion.p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map((project, index) => {
            const { ref: cardRef, inView: cardInView } = useInView({ triggerOnce: true, threshold: 0.01 });

            return (
              <motion.div
                ref={cardRef}
                initial={{ opacity: 0, y: 50 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.3, duration: 0.5 }}
                key={project.id}
                className='bg-[#1c1a2b] overflow-hidden shadow-lg rounded-lg p-2 hover:bg-black hover:shadow-md hover:shadow-purple-500 transition duration-500'
              >
                <img
                  src={project.image}
                  className='w-full h-48 object-cover rounded-lg'
                  alt={project.title}
                />
                <div className='text-white p-6'>
                  <h2 className='p-2 text-xl font-semibold text-purple-500'>{project.title}</h2>
                  <p className='ml-2 mb-2 text-sm text-white'>{project.description}</p>

                  {project.link && (
                    <a href={project.link} target='_blank' rel='noopener noreferrer'>
                      <motion.button
                        className='p-2 rounded-full w-[7rem] mt-2 ml-2 relative overflow-hidden border border-transparent'
                        initial={{ boxShadow: '0 0 8px #CD1C18' }}
                        animate={{
                          boxShadow: ['0 0 8px #CD1C18', '0 0 8px #4B0082'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        }}
                      >
                        Link
                      </motion.button>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Work;
