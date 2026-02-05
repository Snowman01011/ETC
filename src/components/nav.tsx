import "../App.css"
import { Link } from "react-router-dom"
function Nav() {
    return(
        <>
            <nav
                className="bg-gray-800 text-gray-300 h-12 w-2xl rounded-full 
                        flex justify-center items-center gap-18 font-semibold text-sm
                        shadow-lg"
                >
                    <Link to="/"
                        className="hover:text-blue-400 transition-all duration-200 ease-in"
                    >Home</Link>
                    <Link to="/Courses"
                        className="hover:text-blue-400 transition-all duration-200 ease-in"
                    >Courses</Link>
                    <Link to="/About"
                        className="hover:text-blue-400 transition-all duration-200 ease-in"
                    >About</Link>
                    <Link to="/Contact"
                        className="hover:text-blue-400 transition-all duration-200 ease-in"
                    >Contact</Link>
            </nav>
        </>

    )
}

export default Nav