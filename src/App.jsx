import {
  RouterProvider,
} from "react-router-dom";
import './App.css'
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { Routes } from './routes';
function App() {

  return (
    <>
    <NavBar />
    <RouterProvider router={Routes} />
    <Footer />
    </>
  )
}

export default App
