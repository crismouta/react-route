import { Outlet as Sections} from "react-router"
import Coder from "../components/coders/Coder"
import SectionNavbar from "../components/navbar/sections/SectionNavbar"

const Home = () => {
    return (
        <>
            <h1>Home page</h1>
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