import { Outlet as Sections} from "react-router"
import Coder from "../components/coders/Coder"
import SectionNavbar from "../components/navbar/sections/SectionNavbar"
import { useContext } from "react"
import { UserContext } from "../context/user/UserContext"

const Home = () => {
    const usuario = useContext(UserContext);
    return (
        <>
            <h1>Hola, {usuario} soy la Home page</h1>

            <section>
                <Coder/>
            </section>
            <section>
                <SectionNavbar/>
                <Sections/>
            </section>
        </>
    )
}

export default Home