import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import SkillSection from './components/SkillSection'
import Education from './components/Education'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='bg-[rgba(19,9,9,0.19)] overflow-x-hidden'>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Work />
    <SkillSection />
    <Education />
    <Contact />
    </div>
  )
}

export default App