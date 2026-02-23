import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";
import "./Pages/Pages.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,  
      children: [
        { path: "", element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "cart", element: <Cart /> },
        { path: "orders", element: <Orders /> }
      ]
    }
  ]);

  return (<>
    <RouterProvider router={router} />
    <ToastContainer position="top-right"
      autoClose={2000}/>
  </>);
};

export default App;