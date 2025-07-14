import "./App.css"
import { motion } from "framer-motion"
import Navbar from "./Components/Navbar"
import Bio from "./Components/Bio"
import About from "./Components/About"
import Service from "./Components/Service"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {
  // Page container animation
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  // Individual section animation
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {/* Navbar - Fixed position, no scroll animation needed */}
      <Navbar/>
      
      {/* Bio Section */}
      <motion.div
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Bio/>
      </motion.div>
      
      {/* About Section */}
      <motion.div
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <About/>
      </motion.div>
      
      {/* Service Section */}
      <motion.div
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Service/>
      </motion.div>
      
      {/* Projects Section */}
      <motion.div
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Projects/>
      </motion.div>
      
      {/* Contact Section */}
      <motion.div
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Contact/>
      </motion.div>
      
      {/* Footer Section */}
      <motion.div
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Footer/>
      </motion.div>
    </motion.div>
  )
}

export default App