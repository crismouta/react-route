import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/about-us",
                Component: AboutUs
            },
            {
                path: "/contact",
                Component: Contact
            }
        ]
    }
])

