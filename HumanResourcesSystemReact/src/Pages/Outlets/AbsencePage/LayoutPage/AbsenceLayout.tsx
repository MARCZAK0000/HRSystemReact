import { Nav, Navbar } from "react-bootstrap"
import { Outlet } from "react-router"
import NavLinkMenu from "../../../../Components/NavLinkMenu"
import { useForceUpdate } from "../../../../Hooks/useForceUpdate"

const AbsenceLayout = ()=>{
    const forceUpdate = useForceUpdate() //To Update WindowLocation
    return(<>
            <Navbar onClick={forceUpdate} className="border-bottom" >
                <Nav className="ps-2 ">
                    <Nav.Item>
                        <NavLinkMenu isActive={window.location.href.endsWith("/user/absence")} 
                        to={"/user/absence"}>Home</NavLinkMenu>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLinkMenu isActive={window.location.href.endsWith("/user/absence/create")} 
                        to={"/user/absence/create"}>Create Absence</NavLinkMenu>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLinkMenu isActive={window.location.href.endsWith("/user/absence/info")} 
                        to={"/user/absence/info"}>Show Absences</NavLinkMenu>
                    </Nav.Item>
                </Nav>
            </Navbar>
        
            <Outlet/>
    </>)
}

export default AbsenceLayout