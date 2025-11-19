import { Routes, Route } from "react-router"
import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import Courses from "./routes/Courses"
import About from "./routes/About"
import Contact from "./routes/Contact"


function App(){
  return(
    <>
      <div 
        className="w-screen min-h-screen flex bg-gray-300 
        py-0 m-0 box-border justify-center"
      >

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Courses" element={<Courses />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </div>
    </>
  )

}

export default App