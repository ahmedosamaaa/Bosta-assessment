import { Outlet } from "react-router";
import Navbar from "../components/navigation/Navbar";

const AppLayout = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="px-5 mx-auto my-10 max-w-7xl ">
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
