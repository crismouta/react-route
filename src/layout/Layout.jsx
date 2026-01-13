import { Outlet as Pages } from "react-router"
import Navbar from "../components/navbar/Navbar"
import UserProvider from "../context/user/UserProvider"
import CounterProvider from "../context/counter/CounterProvider"

const Layout = () => {
    return (
        <>
            <UserProvider>
                <CounterProvider>
                    <nav><Navbar /></nav>
                    <main><Pages /></main>
                    <footer>Footer</footer>
                </CounterProvider>
            </UserProvider>
        </>

    )
}

export default Layout