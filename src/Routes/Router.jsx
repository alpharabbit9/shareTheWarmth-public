import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home";
import Root from "../Layouts/Root";
import DonationPage from "../Layouts/DonationPage";
import DonationDetail from "../Pages/DonationDetail";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";



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
                element: <DonationPage></DonationPage>,
                loader: async () => {
                    const response = await fetch('donation.json'); 
                    if (!response.ok) {
                        throw new Error('Failed to load donation data');
                    }
                    return response.json(); 
                }
                
            },
            {
                path:':id',
                element:<DonationDetail></DonationDetail>,
                loader: async () => {
                    const response = await fetch('donation.json'); 
                    if (!response.ok) {
                        throw new Error('Failed to load donation data');
                    }
                    return response.json(); 
                }

            },
            {
                path: "dashboard",
                element: <h1>Dashboard</h1>
            },
            {
                path: 'help',
                element: <h1>How to help</h1>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
])

export default Router;