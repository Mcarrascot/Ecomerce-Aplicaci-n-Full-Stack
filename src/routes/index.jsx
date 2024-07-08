import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home"; 
import Login from "../pages/login"; 
import CheckOut from "../pages/checkout";
import Products from "../pages/products";
import Signup from "../pages/Signup";


export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/signup",
    element: <Signup />,
  }
]);
