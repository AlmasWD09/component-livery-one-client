import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyEnrollClass from "../Pages/dashboard/studentDashboa/MyEnrollClass";
import Home from "../Pages/home/Home";
import AddClass from "../Pages/dashboard/studentDashboa/AddClass";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
          path:'/',
          element:<Home />
        }
      ]
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
          path:'my-enroll-class',
          element:<MyEnrollClass />
        },
        {
          path:'add-class',
          element:<AddClass />
        },
      ]
    }
  ]);

  export default router;