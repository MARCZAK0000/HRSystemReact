import { Outlet } from "react-router-dom";
import NavBar from "../../../Layouts/Navbar";
import Footer from "../../../Layouts/Footer";

export default function Layout(){
    return(
        <div className="app">
            <NavBar/>
            <Outlet/>
            <Footer/>
         </div>
    )
}