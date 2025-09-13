import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Event from '../page/Event'
import Directory from '../page/Directory'
import Home from '../page/Home'
import Donations from '../page/Donations'
import Mentorship from '../page/Mentorship'
import JobPortal from '../page/Job'
import Shop from '../page/Shop'
import Contact from '../page/Contact'
import About from '../page/About'
import DashBoard from '../page/DashBoard'


const route = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/events",
                element: <Event />
            },
            {
                path: "/directory",
                element: <Directory />
            },
            {
                path: "/donations",
                element: <Donations />
            },
            {
                path: "/jobs",
                element: <JobPortal />
            },
            {
                path: "/mentorship",
                element: <Mentorship />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashBoard />
    }

])

export default route