import React from "react";
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import Navbar from "./components/Navbar/index";

import Footer from "./components/Footer/Footer";
import { ROUTES } from './routes';
import AOS from "aos";
import "aos/dist/aos.css";
import UserState from "./context/User/UserState";
import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import Home from "./pages/home";
import ProductsPage from "./pages/products";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/login";
import Profile from "./components/Profile";

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
    <div className="bg-white  duration-200">
      <UserState>
        <Navbar />
        <Router>
          {/* <Switch>
            {
              ROUTES.map(({ path, component, isPrivate }, index) => {
                return isPrivate ? <PrivateRoute exact path={path} component={component} key={path} /> : <PublicRoute exact path={path} component={component} key={path}/>
              })
            }
          </Switch> */}

          <Switch>
            <PrivateRoute exact path="/profile" component={Profile} />
            <AuthRoute exact path="/login" component={LoginPage} />
            <AuthRoute exact path="/signup" component={SignupPage} />
            <PublicRoute exact path="/products" component={ProductsPage} />
            <PublicRoute exact path="/" component={Home} />
          </Switch>
        </Router>
      </UserState>
      <Footer />
    </div>
  )
}

export default App
