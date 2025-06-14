import React from 'react'
import profilepic from '../assets/port-prof-2.jpg'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {

    const{ref, inView} =useInView({
        triggerOnce:true,
        threshold:0.2
    })


  return (
    <div id='about' className='py-16 text-white'>
        <div className='container mx-auto px-4 text-center'>
            <motion.h2
            ref={ref}
            initial={{opacity:0, y:100}}
            animate={ inView ? {opacity:1, y:0}  : {}}
            transition={{delay:0.3, duration:0.5}}
            className='text-3xl md:text-4xl font-bold mb-8 underline'>About Me</motion.h2>
            <motion.p
             ref={ref}
             initial={{opacity:0, y:100}}
             animate={ inView ? {opacity:1, y:0}  : {}}
             transition={{delay:0.5, duration:0.5}}
             className='mb-12 text-gray-400 text-center'>
                Passionate Full-Stack Developer crafting seamless web experiences with MERN STACK.
            </motion.p>
            <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className="mb-8 md:mb-0 flex justify-center">

            <motion.div
            ref={ref} 
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 100 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            >
            <motion.img
            src={profilepic}
            className="w-2/3 sm:w-1/2 max-md:w-2/4 rounded-full shadow-lg"
            animate={{
                    boxShadow: ["0 0 12px #CD1C18", "0 0 18px #4B0082"],
                    scale: [1, 1.05]
                    }}
            transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    }}
                />
            </motion.div>
                </div>
                <motion.p
                ref={ref} 
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                 className='md:w-[100rem] text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl xl:mr-[5rem] md:mr-[1rem] '>
                    Hi, I'm Abhishek Gasti, a passionate MERN stack developer with a strong foundation in computer science and business systems.
                    I completed my BE degree from SGBIT College, Belgaum (VTU University), where I honed my problem-solving skills and developed 
                    a keen interest in building efficient, scalable web applications. Hi, I'm Abhishek Gasti, a passionate MERN stack developer 
                    with a strong foundation in computer science and business systems. I completed my BE degree from SGBIT College, Belgaum (VTU University),
                    where I developed my problem-solving skills and developed a keen interest in building efficient, scalable web applications.
                    Beyond coding, I enjoy immersing myself in video games and movies, which fuel my creativity and problem-solving mindset.
                    Always eager to learn new technologies and take on challenging projects that push me to grow as a developer.
                </motion.p>
            </div>

            <div className='flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0 '>
                <motion.div
                ref={ref} 
                initial={{ opacity: 0}}
                animate={inView ? { opacity: 1} : {}}
                transition={{ delay: 1.2, duration: 0.5 }}
                className='text-center'>
                <h3 className='tex-3xl md:text-8xl font-bold md:my-6 text-purple-500'>0</h3>
                <motion.p
                ref={ref} 
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.7, duration: 0.5 }}                 
                className='text-sm sm:text-base text-gray-300'>Years of Experience</motion.p>
                </motion.div>
            

            
                <motion.div
                ref={ref} 
                initial={{ opacity: 0}}
                animate={inView ? { opacity: 1} : {}}
                transition={{ delay: 1.4, duration: 0.5 }}
                className='text-center'>    
                <h3  className='tex-3xl md:text-8xl font-bold md:my-6 text-purple-500'>3</h3>
                <motion.p
                 ref={ref} 
                 initial={{ opacity: 0, y: 100 }}
                 animate={inView ? { opacity: 1, y: 0 } : {}}
                 transition={{ delay: 1.7, duration: 0.5 }}
                  className='text-sm sm:text-base text-gray-300'>Projects Made</motion.p>
                </motion.div>
            </div>

            
        </div>
    </div>
  )
}

export default About