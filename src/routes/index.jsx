import Home from "../pages/home"; 
import Login from "../pages/login"; 
import CheckOut from "../pages/checkout";
import Products from "../pages/products";
import Signup from "../pages/Signup";


export const ROUTES = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/checkout",
    component: <CheckOut />,
  },
  {
    path: "/products",
    component: <Products />,
  },
  {
    path: "/profile",
    component: <Products />,
    isPrivate: true,
  },
  {
    path: "/signup",
    component: <Signup />,
  },
];
