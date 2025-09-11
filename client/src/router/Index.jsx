import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Event from '../page/Event'
import Directory from '../page/Directory'
import Home from '../page/Home'
import Donations from '../page/Donations'


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
                path: "/event",
                element: <Event />
            },
            {
                path: "/directory",
                element: <Directory />
            },
            {
                path : "/donations",
                element : <Donations/>
            }
        ]
    },

])

export default route