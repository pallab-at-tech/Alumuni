import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Event from '../page/Event'


const route = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
    },
    {
        path : "/event",
        element : <Event/>
    }
])

export default route