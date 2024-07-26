import { Outlet } from "react-router-dom";
import Sidebar from "../Components/sidebar/Sidebar";


const DashboardLayout = () => {
    return (
        <div className="relative flex flex-col md:flex-row justify-between lg:gap-6 px-2">
            
            {/* sidebar */}
            <div className="w-full lg:w-[16%] ">
            <Sidebar />
            </div>

            {/* Outlet */}
            <div className="w-full h-screen lg:w-[84%] bg-green-200 rounded p-4 mt-4">
            <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;