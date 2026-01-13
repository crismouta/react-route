import { NavLink } from "react-router"
import './navbar.css'
import { useContext } from "react"
import { CounterContext } from "../../context/counter/CounterContext"

const Navbar = () => {
    const {counter} = useContext(CounterContext);
    return (
        <>
            <NavLink className={"navlink"} to="/">Home</NavLink>
            <NavLink className={"navlink"} to="/about-us">About</NavLink>
            <NavLink className={"navlink"} to="/contact">Contact</NavLink>
            <span>{counter}</span>
        </>
    )
}

export default Navbar