import { Nav, Navbar } from "react-bootstrap"
import NavLinkMenu from "../../../../Components/NavLinkMenu"
import { Outlet } from "react-router"

const AttendanceLayout = ()=>{
    return (<>
        <Navbar className="border-bottom" >
                <Nav className="ps-2 ">
                    <Nav.Item>
                        <NavLinkMenu isActive={window.location.href.endsWith("/user/absence")} 
                        to={"/user/attendance"}>Home</NavLinkMenu>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLinkMenu isActive={window.location.href.endsWith("/user/absence/create")} 
                        to={"/user/attendance/create"}>Arrival</NavLinkMenu>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLinkMenu isActive={window.location.href.endsWith("/user/absence/info")} 
                        to={"/user/attendance/departure"}>Departure</NavLinkMenu>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLinkMenu isActive={window.location.href.endsWith("/user/absence/info")} 
                        to={"/user/attendance/info"}>Attendance</NavLinkMenu>
                    </Nav.Item>
                </Nav>
            </Navbar>
            <Outlet/>
    </>)
}


export default AttendanceLayout