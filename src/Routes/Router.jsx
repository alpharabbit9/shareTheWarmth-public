import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home";
import Root from "../Layouts/Root";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'donationCampaignPage',
                element: <h1>Donation Campaign Page</h1>
            },
            {
                path: "dashboard",
                element: <h1>Dashboard</h1>
            },
            {
                path: 'help',
                element: <h1>How to help</h1>
            },
        ]
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
])

export default Router;