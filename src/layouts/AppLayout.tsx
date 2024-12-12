import { Outlet } from "react-router";
import Navbar from "../components/navigation/Navbar";

const AppLayout = () => {
    return (
        <div className="h-full min-h-screen transition-all duration-300 bg-background-color">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default AppLayout;
