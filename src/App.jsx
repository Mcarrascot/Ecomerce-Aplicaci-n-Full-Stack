import React from "react";
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import Navbar from "./components/Navbar/index";

import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import UserState from "./context/User/UserState";
import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AuthRoute from "./components/Routes/AuthRoute";
import Home from "./pages/home";
import ProductsPage from "./pages/products";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";
import CartState from "./context/Cart/CartState";
import CheckOutPage from "./pages/checkout";
import ProductState from "./context/Product/ProductState";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white">
      <CartState>
        <ProductState>
          <UserState>
            <Navbar />
            <Router>
              <Switch>
                <PrivateRoute exact path="/profile" component={ProfilePage} />
                <AuthRoute exact path="/login" component={LoginPage} />
                <AuthRoute exact path="/signup" component={SignupPage} />
                <PublicRoute exact path="/products" component={ProductsPage} />
                <PublicRoute exact path="/" component={Home} />
                <PublicRoute exact path="/checkout" component={CheckOutPage} />
              </Switch>
            </Router>
          </UserState>
        </ProductState>
      </CartState>
      <Footer />
    </div>
  )
}

export default App
