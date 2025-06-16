// import React from 'react'
// import {FaAppStore} from 'react-icons/fa'
// import {motion} from 'framer-motion'
// import { useInView } from 'react-intersection-observer'

// const Services = () => {

//     const{ref, inView} =useInView({
//         triggerOnce:true,
//         threshold:0.2
//     })

//     const serviceData =[
//         {
//             title:"Frontend Development (React.js)",
//             description:"Building dynamic, responsive, and interactive UI/UX with React.js,Implementing state management using Redux, Context API, or Zustand,Creating reusable components with Tailwind CSS, Material-UI, Bootstrap, or Styled Components,Integrating third-party APIs and libraries for enhanced functionality,Client-side form validation and error handling",
//         },
//         {
//             title:"Backend Development (Node.js & Express.js)",
//             description:"Developing RESTful APIs with Node.js and Express.js,Implementing GraphQL APIs for efficient data fetching,Middleware creation for authentication, logging, and request validation,Handling file uploads (images, videos, PDFs) using Multer or Cloudinary.",
//         },
//         {
//             title:"Database Management (MongoDB)",
//             description:"Designing and managing NoSQL databases with MongoDB,Using Mongoose ORM for schema design and validation,Implementing database indexing, aggregation, and optimization for performance.",
//         },
//         {
//             title:"Authentication & Authorization",
//             description:"User authentication with JWT (JSON Web Tokens) or OAuth (Google, Facebook, GitHub login),Implementing role-based access control (RBAC) and protected routes,Password encryption using bcrypt.",
//         },
//         {
//             title:"Real-Time Features (Socket.io & WebRTC)",
//             description:"Developing real-time chat applications with Socket.io,Implementing voice & video calling using WebRTC,Adding live notifications and typing indicators."
//         }
//     ]
//   return (
//     <div className='text-white py-16'>
//         <div className='container mx-auto px-4 text-center'>
//             <motion.h2 
//             ref={ref}
//             initial={{opacity:0, y:100}}
//             animate={ inView ? {opacity:1, y:0}  : {}}
//             transition={{delay:0.3, duration:0.5}}
//             className='text-3xl md:text-4xl font-bold underline mb-8'>Services</motion.h2>
//             <motion.p 
//             ref={ref}
//             initial={{opacity:0, y:100}}
//             animate={ inView ? {opacity:1, y:0}  : {}}
//             transition={{delay:0.5, duration:0.5}}
//             className='mb-12 text-gray-400'> From frontend design to backend architecture, I create seamless and efficient digital solutions.</motion.p>

//             <motion.div 
//             ref={ref}
//             initial={{opacity:0, y:100}}
//             animate={ inView ? {opacity:1, y:0}  : {}}
//             transition={{delay:0.3, duration:0.5}}
//             className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
//                {serviceData.map((service,index)=>(
//                 <motion.div
//                 ref={ref}
//             initial={{opacity:0, scale:0.8}}
//             animate={ inView ? {opacity:1, scale:1}  : {opacity:0, scale:0.8}}
//             transition={{duration:0.5, delay: index * 0.2}}
//                 className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 hover:bg-[rgba(19,9,9,0.19)] transition-shadow duration-300'
//                 key={index}>
//                     <FaAppStore 
//                     className='text-purple-500 text-4xl sm:text-5xl lg:text-4xl max-sm:mx-auto'/>
//                     <h3
//                     className='text-lg sm:text-xl lg:text-4xl font-bold'
//                     >{service.title}</h3>
//                     <p className='mt-12 text-md'>{service.description}</p>

//                 </motion.div>

//                )

//                )}

//             </motion.div>

//         </div>
//     </div>
//   )
// }

// export default Services

import React from 'react';
import { FaAppStore } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.01 });
  const { ref: subHeadingRef, inView: subHeadingInView } = useInView({ triggerOnce: true, threshold: 0.01 });

  const serviceData = [
    {
      title: "Frontend Development (React.js)",
      description:
        "Building dynamic, responsive UI with React.js, state management via Redux or Context API, and reusable components using Tailwind, MUI, or Styled Components.",
    },
    {
      title: "Backend Development (Node.js & Express.js)",
      description:
        "Creating RESTful and GraphQL APIs, handling authentication, file uploads, and middleware in Node/Express.",
    },
    {
      title: "Database Management (MongoDB)",
      description:
        "Designing schemas, managing NoSQL data, optimizing queries using Mongoose, indexing, and aggregations.",
    },
    {
      title: "Authentication & Authorization",
      description:
        "JWT, OAuth logins (Google/GitHub), role-based access control (RBAC), and password security with bcrypt.",
    },
    {
      title: "Real-Time Features (Socket.io & WebRTC)",
      description:
        "Real-time chat, notifications, typing indicators, and video/audio calling with WebRTC integration.",
    },
  ];

  return (
    <div className='text-white py-16'>
      <div className='container mx-auto px-4 text-center'>

        {/* Heading */}
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 100 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='text-3xl md:text-4xl font-bold underline mb-8'>
          Services
        </motion.h2>

        {/* Subheading */}
        <motion.p
          ref={subHeadingRef}
          initial={{ opacity: 0, y: 100 }}
          animate={subHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className='mb-12 text-gray-400'>
          From frontend design to backend architecture, I create seamless and efficient digital solutions.
        </motion.p>

        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          {serviceData.map((service, index) => {
            const { ref: cardRef, inView: cardInView } = useInView({ triggerOnce: true, threshold: 0.01 });

            return (
              <motion.div
                ref={cardRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={cardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 hover:bg-[rgba(19,9,9,0.19)] transition-shadow duration-300'
                key={index}
              >
                <FaAppStore className='text-purple-500 text-4xl sm:text-5xl lg:text-4xl max-sm:mx-auto' />
                <h3 className='text-lg sm:text-xl lg:text-4xl font-bold mt-4'>{service.title}</h3>
                <p className='mt-6 text-md'>{service.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Services;
