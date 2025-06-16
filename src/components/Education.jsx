// import React from 'react'
// import {motion} from 'framer-motion'
// import { useInView } from 'react-intersection-observer'


// const Education = () => {

//     const{ref, inView} =useInView({
//         triggerOnce:true,
//         threshold:0.2
//     })

//     const educompleted = [
//         {
//             id:1,
//             name: 'Mallasajjan English Medium School',
//             duration: 'Primary Schooling, LKG - 2nd std',
//             location: 'Dharwad',
//             link: "https://mallasajjan.org/"
//         },
//         {
//             id:2,
//             name: 'Shanti Sadana High School',
//             duration: 'Primary Schooling, 3rd to 10th',
//             location: 'Dharwad',
//             link:'https://www.justdial.com/Dharwad/Shanti-Sadan-School-Navodayanagar/0836PX836-X836-120709131924-E8P8_BZDET'
//         },
//         {
//             id:3,
//             name: 'SG Balekundri Institute of Technology',
//             duration: 'B.E Engineering',
//             location: 'Belagavi',
//             link:'https://sgbit.edu.in/'
//         },
//          {
//             id:4,
//             name: 'Prism PU Science College- Timmanagoudar Education Academy',
//             duration: 'PUC',
//             location: 'Dharwad',
//             link:'https://sgbit.edu.in/'
//         },
//     ]
//   return (
//         <div id='education' className="container mx-auto py-12 px-4 relative">
//             <motion.h2 
//             ref={ref}
//             initial={{opacity:0, y:100}}
//             animate={ inView ? {opacity:1, y:0}  : {}}
//             transition={{delay:0.3, duration:0.5}}
//             className="text-white text-2xl sm:text-4xl font-bold underline text-center mb-12">Education</motion.h2>
//             <div className="relative flex flex-col items-center w-full">
//                 {educompleted.map((edu, index) => (
//                     <div key={edu.id} className="relative flex w-full items-center mb-8 justify-center">
                        
//                         {index % 2 === 0 && (

//                             <motion.div 
//                             ref={ref}
//                             initial={{opacity:0, x:-100}}
//                             animate={ inView ? {opacity:1, x:0}  : {}}
//                             transition={{delay:0.3, duration:0.5}}
//                             className="w-[50%] pr-8 max-sm:w-[100%] max-lg:w-[80%]">
                    
//                                 <div className="bg-[rgba(19,9,9,0.19)] p-6 rounded-lg shadow-md w-full text-right hover:shadow-md hover:shadow-purple-500 hover:bg-[rgba(19,9,9,0.19)] transition:shadow duration-300">
//                                     <h3 className="text-purple-500 text-sm font-semibold sm:text-xl">{edu.name}</h3>
//                                     <h2 className="text-gray-300 text-sm sm:text-md">{edu.duration}</h2>
//                                     <p className="text-purple-500">{edu.location}</p>
//                                     <a href={edu.link} target="_blank" rel="noopener noreferrer">
//                                         <motion.button
//                                         className='p-2 rounded-full w-[7rem] mt-2 overflow-hidden border border-transparent text-white'
//                                         initial={{ boxShadow: "0 0 8px #CD1C18" }}
//                                         animate={{ boxShadow: ["0 0 8px #CD1C18", "0 0 8px #4B0082"] }}
//                                         transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
//                                         >
//                                             Visit
//                                         </motion.button>


//                                     </a>
//                                 </div>
//                             </motion.div>
//                         )}
//                         <div className="w-10 flex flex-col items-center">
//                             {index !== educompleted.length - 1 && (
//                                 <div className="w-1 h-full bg-gray-500"></div>
//                             )}
                            
//                         </div>

//                         {index % 2 !== 0 && (
//                             <motion.div
//                             ref={ref}
//                             initial={{opacity:0, x:100}}
//                             animate={ inView ? {opacity:1, x:0}  : {}}
//                             transition={{delay:0.3, duration:0.5}}
//                              className="w-[50%] pl-8 max-sm:w-[100%] max-lg:w-[80%]">
//                                 <div className="bg-[rgba(19,9,9,0.19)] p-6 rounded-lg shadow-md w-full text-left hover:shadow-md hover:shadow-purple-500 hover:bg-[rgba(19,9,9,0.19)] transition:shadow duration-300">
//                                     <h3 className="text-purple-500 text-sm font-semibold sm:text-xl">{edu.name}</h3>
//                                     <h2 className="text-gray-300 text-sm sm:text-md">{edu.duration}</h2>
//                                     <p className="text-purple-500">{edu.location}</p>
//                                     <a href={edu.link} target="_blank" rel="noopener noreferrer">
//                                         <motion.button
//                                         className='p-2 rounded-full w-[7rem] mt-2 overflow-hidden border border-transparent text-white'
//                                         initial={{ boxShadow: "0 0 8px #CD1C18" }}
//                                         animate={{ boxShadow: ["0 0 8px #CD1C18", "0 0 8px #4B0082"] }}
//                                         transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
//                                         >
//                                             Visit
//                                         </motion.button>
//                                     </a>
//                                 </div>
//                             </motion.div>
//                         )}
//                     </div>
//                 ))}

               
//             </div>
//         </div>
//     );
// };

// export default Education;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const educompleted = [
    {
      id: 1,
      name: 'Mallasajjan English Medium School',
      duration: 'Primary Schooling, LKG - 2nd std',
      location: 'Dharwad',
      link: 'https://mallasajjan.org/',
    },
    {
      id: 2,
      name: 'Shanti Sadana High School',
      duration: 'Primary Schooling, 3rd to 10th',
      location: 'Dharwad',
      link: 'https://www.justdial.com/Dharwad/Shanti-Sadan-School-Navodayanagar/0836PX836-X836-120709131924-E8P8_BZDET',
    },
    {
      id: 3,
      name: 'SG Balekundri Institute of Technology',
      duration: 'B.E Engineering',
      location: 'Belagavi',
      link: 'https://sgbit.edu.in/',
    },
    {
      id: 4,
      name: 'Prism PU Science College- Timmanagoudar Education Academy',
      duration: 'PUC',
      location: 'Dharwad',
      link: 'https://sgbit.edu.in/',
    },
  ];

  return (
    <div id="education" className="container mx-auto py-12 px-4 relative">
      {/* Heading */}
      <motion.h2
        ref={headingRef}
        initial={{ opacity: 0, y: 100 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-white text-2xl sm:text-4xl font-bold underline text-center mb-12"
      >
        Education
      </motion.h2>

      {/* Timeline blocks */}
      <div className="relative flex flex-col items-center w-full">
        {educompleted.map((edu, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.01 });

          const isLeft = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className="relative flex w-full items-center mb-8 justify-center"
            >
              {isLeft && (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="w-[50%] pr-8 max-sm:w-[100%] max-lg:w-[80%]"
                >
                  <div className="bg-[rgba(19,9,9,0.19)] p-6 rounded-lg shadow-md w-full text-right hover:shadow-md hover:shadow-purple-500 hover:bg-[rgba(19,9,9,0.19)] transition-shadow duration-300">
                    <h3 className="text-purple-500 text-sm font-semibold sm:text-xl">
                      {edu.name}
                    </h3>
                    <h2 className="text-gray-300 text-sm sm:text-md">
                      {edu.duration}
                    </h2>
                    <p className="text-purple-500">{edu.location}</p>
                    <a href={edu.link} target="_blank" rel="noopener noreferrer">
                      <motion.button
                        className="p-2 rounded-full w-[7rem] mt-2 overflow-hidden border border-transparent text-white"
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
                        Visit
                      </motion.button>
                    </a>
                  </div>
                </motion.div>
              )}

              {/* Vertical Line */}
              <div className="w-10 flex flex-col items-center">
                {index !== educompleted.length - 1 && (
                  <div className="w-1 h-full bg-gray-500"></div>
                )}
              </div>

              {!isLeft && (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, x: 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="w-[50%] pl-8 max-sm:w-[100%] max-lg:w-[80%]"
                >
                  <div className="bg-[rgba(19,9,9,0.19)] p-6 rounded-lg shadow-md w-full text-left hover:shadow-md hover:shadow-purple-500 hover:bg-[rgba(19,9,9,0.19)] transition-shadow duration-300">
                    <h3 className="text-purple-500 text-sm font-semibold sm:text-xl">
                      {edu.name}
                    </h3>
                    <h2 className="text-gray-300 text-sm sm:text-md">
                      {edu.duration}
                    </h2>
                    <p className="text-purple-500">{edu.location}</p>
                    <a href={edu.link} target="_blank" rel="noopener noreferrer">
                      <motion.button
                        className="p-2 rounded-full w-[7rem] mt-2 overflow-hidden border border-transparent text-white"
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
                        Visit
                      </motion.button>
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
