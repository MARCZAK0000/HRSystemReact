import { Link } from "react-router-dom"
import { useUser } from "../Hooks/useUserContext"
import { Container, Image } from "react-bootstrap";
import { useUserInformations } from "../Hooks/useUserInformations";


export const NavBar = ()=>{

    const user = useUser();
    const userInfo = useUserInformations()
    return(
        <Container fluid className="p-0 m-0 d-flex">
            <nav className="ps-5 navbar navbar-expand-lg navbar-light border-bottom w-100">
                <div className="container">
                    <Link className="navbar-brand fs-3" to="/">HR System</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5 me-1">
                                <Link className="nav-link" aria-current="page" to="/"><i className="bi bi-house-fill"></i> Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {user.user===null?
            <nav className="ps-5 navbar navbar-expand-lg navbar-light border-bottom w-100">
                <div className="container">
                    <div className="collapse navbar-collapse flex-row-reverse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5 me-1">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item fs-5 me-1">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>:
             <nav className="ps-5 navbar navbar-expand-lg navbar-light border-bottom w-100">
             <div className="container">
                 <div className="collapse navbar-collapse flex-row-reverse">
                     <ul className="navbar-nav">
                         <li className="nav-item fs-5 me-1">
                             <Link className="nav-link" to="/">Welcome {user.user?.email}</Link>
                         </li>
                         <li className="d-flex align-items-center">
                            <Image
                                src={`http://127.0.0.1:10000/devstoreaccount1/pictures/${userInfo.userInfo?.userId}`}
                                height={'50px'}
                                width={'50px'}
                                roundedCircle
                            />
                         </li>
                     </ul>
                 </div>
             </div>
         </nav>
            
            
            
            }
                        
        </Container>
    )
}


export default NavBar