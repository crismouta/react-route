import { NavLink } from "react-router"
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about-us">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </>
    )
}

export default Navbar