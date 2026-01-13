import { Outlet as Pages} from "react-router"
import Navbar from "../components/navbar/Navbar"

const Layout = () => {
    return (
        <>
            <nav><Navbar/></nav>
            <main><Pages/></main>
            <footer>Footer</footer>
        </>
    )
}

export default Layout