import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="app-container">
            <Navbar />

            <div className="page-content">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Layout;