import { NavLink } from "react-router"

const SectionNavbar = () => {
    return (
        <>
            <NavLink className={"navlink"} to="/section1">Section1</NavLink>
            <NavLink className={"navlink"} to="/section2">Section2</NavLink>
        </>
    )
}

export default SectionNavbar