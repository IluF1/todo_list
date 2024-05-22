import Profile from "../../pages/profile/profile";
import App from "../../App";
import Sign_in from "../../pages/sign_in/sign_in";
import Sign_up from "../../pages/sign_up/sign_up";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/profile',
        element: <Profile/>
    },
    {
        path: '/sign_in',
        element: <Sign_in/>
    },
    {
        path: '/sign_up',
        element: <Sign_up/>
    }
])