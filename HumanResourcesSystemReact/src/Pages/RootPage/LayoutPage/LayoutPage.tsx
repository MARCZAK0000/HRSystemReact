import { Outlet } from "react-router-dom";
import NavBar from "../../../Layouts/Navbar";
import Footer from "../../../Layouts/Footer";
import { Container, ToastContainer } from "react-bootstrap";

export default function Layout(){

    return(
        <div className="app">
            <NavBar/>
            <Container fluid className="p-0 m-0 d-flex flex-grow-1">
                <ToastContainer/>
                <Outlet/>
            </Container>
            <Footer/>
         </div>
    )
}