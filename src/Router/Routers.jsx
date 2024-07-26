import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyEnrollClass from "../Pages/dashboard/studentDashboa/MyEnrollClass";


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
    {
      path:'/dashboard',
      element:<DashboardLayout />,
      children:[
        {
          path:'/my-enroll-class',
          element:<MyEnrollClass />
        },
      ]
    }
  ]);

  export default router;