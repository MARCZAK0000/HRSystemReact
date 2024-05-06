import { useEffect, useState} from 'react';
import { useUser } from '../../../Hooks/useUserContext';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { useUserInformations } from '../../../Hooks/useUserInformations';
import MenuLink from '../../../Components/MenuDashboardPage';


const DashboardPage = () => {
    console.log("XD")
    const info = useUserInformations();
    const user = useUser();
    const [path, setPath] = useState<string>(window.location.href)


    const handleClick = ()=>{
        setPath(window.location.href)
    }
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
                info.setUserInfo(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])
    

    return(
        <>
            <Row className='flex-grow-1 d-flex mx-0'>
                <Col className='border-end' xs={2}>
                    <div className='display-6 py-2'>
                        <span>Menu</span>
                    </div>
                    <Nav onClick={handleClick} className='flex-column' variant='pills' defaultActiveKey="" >
                        <MenuLink 
                        to={"/"} 
                        isActive={path.endsWith("/")? true : false}
                        >Home
                        </MenuLink>
                        <MenuLink 
                        to={"/user/attendance"} 
                        isActive={path.includes("/user/attendance")? true : false}
                        >Attendance
                        </MenuLink>
                        <MenuLink 
                        to={"/user/absence"} 
                        isActive={path.includes("/user/absence")? true : false}
                        >Absence
                        </MenuLink>
                        <MenuLink 
                        to={"/account/settings"} 
                        isActive={path.includes("/account/settings")? true : false}
                        >Settings
                        </MenuLink>
                        <MenuLink 
                        to={"/asdasd"} 
                        isActive={path.includes("/asdasd")? true : false}
                        >Logout
                        </MenuLink>
                    </Nav>
                </Col>
                <Col xs={10} className='d-flex flex-grow-1 p-0 m-0'>
                    <Container fluid className='p-0 m-0'>
                        <Outlet/>
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default DashboardPage;