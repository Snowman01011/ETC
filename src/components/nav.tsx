import "../App.css"
import { Link } from "react-router-dom"
function Nav() {
    return(
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Courses">Courses</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
            </nav>
        </>
    )
}

export default Nav