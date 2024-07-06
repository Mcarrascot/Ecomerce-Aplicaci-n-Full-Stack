import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../components/pages/home"; 
import Login from "../components/pages/login"; 
import CheckOut from "../components/pages/checkout";
import Products from "../components/pages/products";


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
  }
]);
