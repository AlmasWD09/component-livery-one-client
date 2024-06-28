import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />
    },
    {
        path:'/sign-up',
        element:<SignUp />
    },
    {
        path:'/log-in',
        element:<LogIn />
    },
  ]);

  export default router;