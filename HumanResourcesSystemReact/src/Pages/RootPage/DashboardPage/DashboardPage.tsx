import { useEffect, useRef, useState} from 'react';
import { useUser } from '../../../Hooks/useUserContext';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, Outlet, Router, useLocation } from 'react-router-dom';
import { useUserInformations } from '../../../Hooks/useUserInformations';
import MenuLink from '../../../Components/MenuDashboardPage';
import { Route } from 'react-router';



const DashboardPage = () => {
    console.log("XD")
    const info = useUserInformations();
    const user = useUser()
    const path = useLocation()
    const url = useRef<string>(window.location.href)
    //const [url, setUrl] = useState<string>(window.location.href)
    useEffect(()=>{
        const fetchData = async ()=>{

            try {
                const response = await fetch("https://localhost:7068/api/user/info", {
                    method: 'GET', 
                    mode: 'cors',
                    headers: { 'Content-Type': 'application/json', "Authorization" : `Bearer ${user.user?.token}`},
                })
    
                if(!response.ok){
                    throw new Error("Something went wrong")
                }

                const result = await response.json()
                console.log(result)
                info.setUserInfo(result)
                console.log(info.userInfo!.departmentName)
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])
    

    return(
        <>
            <Container fluid className='flex-grow-1'>
                <Row>
                    <Col xs={2}>
                        <div className='display-6 py-2'>
                            <span>Menu</span>
                        </div>
                        <Nav className='flex-column' variant='pills' defaultActiveKey="/" >
                            <MenuLink 
                            to={"/"} 
                            isActive={window.location.href.endsWith("/")? true : false}
                            >Home
                            </MenuLink>
                            <MenuLink 
                            to={"/user/arrivals"} 
                            isActive={window.location.href.endsWith("/user/arrivals")? true : false}
                            >Arrival
                            </MenuLink>
                            <MenuLink 
                            to={"/user/absence"} 
                            isActive={window.location.href.endsWith("/user/absence")? true : false}
                            >Absence
                            </MenuLink>
                            <MenuLink 
                            to={"/account/settings"} 
                            isActive={window.location.href.endsWith("/account/settings")? true : false}
                            >Settings
                            </MenuLink>
                            <MenuLink 
                            to={"/asdasd"} 
                            isActive={window.location.href.endsWith("/asdasd")? true : false}
                            >Logout
                            </MenuLink>
                        </Nav>
                    </Col>
                    <Col xs={9} className='border-start' style={{height: '650px'}}>
                       <Outlet/>
                    </Col>
                    
                    
                </Row>
            </Container>
        </>
    )
}

export default DashboardPage;