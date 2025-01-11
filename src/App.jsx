import "./App.css"
import Navbar from "./Components/Navbar"
import Bio from "./Components/Bio"
import About from "./Components/About"
import Service from "./Components/Service"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {
  return (
    <div>
      <Navbar/>
      <Bio/>
      <About/>
      <Service/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
