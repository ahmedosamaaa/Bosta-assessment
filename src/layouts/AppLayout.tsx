import { Outlet } from "react-router";
import Navbar from "../components/navigation/Navbar";

const AppLayout = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default AppLayout;
