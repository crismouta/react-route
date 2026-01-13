import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Layout from "../layout/Layout";
import Section1 from "../pages/sections/Section1";
import Section2 from "../pages/sections/Section2";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/",
                Component: Home,
                children: [
                    {
                        path: "/section1",
                        Component: Section1
                    },
                    {
                        path: "/section2",
                        Component: Section2
                    }
                ]
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

