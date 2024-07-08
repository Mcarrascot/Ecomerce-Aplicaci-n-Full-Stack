import React from "react";
import {
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar/index";

import Footer from "./components/Footer/Footer";
import { Routes } from './routes';
import AOS from "aos";
import "aos/dist/aos.css";

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
      <Navbar />
      <RouterProvider router={Routes} />
      <Footer />
    </div>
  )
}

export default App
