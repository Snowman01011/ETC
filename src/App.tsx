import "./App.css"
import { Routes, Route } from "react-router-dom"
import Nav from "./components/nav"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return(
    <>
      <Nav />

      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Courses" element={<Courses />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App