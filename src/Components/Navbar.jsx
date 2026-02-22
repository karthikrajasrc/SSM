import { Link, Outlet } from "react-router"
import logo from "../images/logo.svg"
import "./Navbar.css"
import { RiMenuAddLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const handlemenu = () => {
        document.querySelector(".menu-links").classList.add("active");
    }

    const handleclose = () => {
        document.querySelector(".menu-links").classList.remove("active");
    }

    return (
        <>
            <div className="navbar-main">
                <img src={logo} alt="" />
                <h1>SSM</h1>
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/orders">Orders</Link>
                </div>
                <div className="navbar-menu">
                    <RiMenuAddLine className="menu-icon" onClick={handlemenu} />
                    <div className="menu-links">
                        <Link to="/" onClick={handleclose}>Home</Link>
                        <Link to="/products" onClick={handleclose}>Products</Link>
                        <Link to="/cart" onClick={handleclose}>Cart</Link>
                        <Link to="/orders" onClick={handleclose}>Orders</Link>
                        <IoClose className="close-icon" onClick={handleclose} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar   