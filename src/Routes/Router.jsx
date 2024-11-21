import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home";
import Root from "../Layouts/Root";
import DonationPage from "../Layouts/DonationPage";
import DonationDetail from "../Pages/DonationDetail";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UpdateProfile from "../Components/Update/UpdateProfile";
import ForgotPass from "../Components/ForgotPass";
import HowToGetHelp from "../Components/HowToGetHelp";




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
                path: ':id',
                element: <PrivateRoutes>
                    <DonationDetail></DonationDetail>
                </PrivateRoutes>,
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
                element: <PrivateRoutes>
                    <Dashboard></Dashboard>
                </PrivateRoutes>
            },
            {
                path: 'help',
                element: <HowToGetHelp></HowToGetHelp>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },

            {
                path:'updateProfile',
                element:<PrivateRoutes>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoutes>
            },
            {
                path:'forgot',
                element:<ForgotPass></ForgotPass>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default Router;