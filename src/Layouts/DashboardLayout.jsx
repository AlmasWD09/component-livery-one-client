import { Outlet } from "react-router-dom";
import Sidebar from "../Components/sidebar/Sidebar";


const DashboardLayout = () => {
    return (
        <div>
            {/* sidebar */}
            <Sidebar />
            {/* Outlet */}
            <Outlet />
        </div>
    );
};

export default DashboardLayout;