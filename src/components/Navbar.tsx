
import { Link } from "react-router-dom"
import "./global.css"

function Navbar() {
    return (
        <>
            <nav 
                className="w-11/12 rounded-md bg-clip-padding backdrop-filter 
                backdrop-blur-xl bg-opacity-10 fixed top-0 py-4 flex items-center 
                justify-center m-4 gap-3"
                >

                <Link 
                    to="/" 
                    className="font-sans font-semibold text-gray-800 text-1xl 
                    hover:text-gray-200 hover:bg-blue-900 rounded-md p-2 w-22 
                    text-center transition delay-100 ease-linear duration-100"
                >
                    Home
                </Link>

                <Link 
                    to="/Courses" 
                    className="font-sans font-semibold text-gray-800 text-1xl 
                    hover:text-gray-200 hover:bg-blue-900 rounded-md p-2 w-22 
                    text-center transition delay-100 ease-linear duration-100"
                >
                   Courses
                </Link>

                <Link 
                    to="/About" 
                    className="font-sans font-semibold text-gray-800 text-1xl 
                    hover:text-gray-200 hover:bg-blue-900 rounded-md p-2 w-22 
                    text-center transition delay-100 ease-linear duration-100"
                >
                   About Us
                </Link>

                <Link 
                    to="/Contact" 
                    className="font-sans font-semibold text-gray-800 text-1xl 
                    hover:text-gray-200 hover:bg-blue-900 rounded-md p-2 w-22 
                    text-center transition delay-100 ease-linear duration-100"
                >
                   Contact
                </Link>

            </nav>
        </>
    )
}

export default Navbar