import { useEffect, useState} from 'react';
import { useUser } from '../../../Hooks/useUserContext';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { UserInformationsType, useUserInformations } from '../../../Hooks/useUserInformations';
import MenuLink from '../../../Components/MenuDashboardPage';
import { loginUserResponseProps } from '../../../Utilities/Types';
import { useAxiosRequest } from '../../../Hooks/useAxiosRequest';
import { ToastContainer } from 'react-toastify';

const DashboardPage = () => {
    const info = useUserInformations();
    const user = useUser();
    const [path, setPath] = useState<string>(window.location.href)
    const {get} = useAxiosRequest<UserInformationsType>()
    const handleClick = ()=>{
        setPath(window.location.href)
    }
   

    const RefreshToken = async ()=>{
        try{
            const response = await fetch('https://localhost:7068/api/account/refresh', {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${user.user?.token}`
                },
                body:JSON.stringify({refreshToken: localStorage.getItem('RefreshToken')})
            })
            if(!response.ok){
                throw new Error(`${localStorage.getItem('RefreshToken')}`)
            }
            const result : loginUserResponseProps = await response.json()

            user.setUser({
                email: result.email,
                username: result.username,
                token: result.token,
                refreshToken: result.refreshToken
            });
            localStorage.setItem('RefreshToken', result.refreshToken)
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        const minutes = 60*1000
        setInterval(RefreshToken, minutes*5)
    },[])


    useEffect(()=>{
        const fetchData = async ()=>{

            const response = await get('https://localhost:7068/api/user/info', {
                headers: { 
                    'Content-Type': 'application/json', 
                    "Authorization" : `Bearer ${user.user?.token}`
                }
            })
            
            if(typeof(response) === "undefined"){
                user.setUser(null)
                return
            }
            info.setUserInfo(response.data)
            
        }
        fetchData();
    },[])

    return(
        <>  
            <ToastContainer/>
            <Row className='flex-grow-1 d-flex mx-0 '>
                <Col className='border-end' xs={2}>
                    <Nav onClick={handleClick} className='flex-column' variant='pills' defaultActiveKey="" >
                        <div className='display-6 py-2'>
                            <span>Menu</span>
                        </div>
                        <MenuLink 
                        to={"/"} 
                        isActive={path.endsWith("/")? true : false}>
                            Home
                        </MenuLink>
                        <MenuLink 
                        to={"/user/attendance"} 
                        isActive={path.includes("/user/attendance")? true : false}>
                            Attendance
                        </MenuLink>
                        <MenuLink 
                        to={"/user/absence"} 
                        isActive={path.includes("/user/absence")? true : false}>
                            Absence
                        </MenuLink>
                        <MenuLink 
                        to={"/user/settings"} 
                        isActive={path.includes("/user/settings")? true : false}>
                            Settings
                        </MenuLink>
                        <MenuLink 
                        to={"/asdasd"} 
                        isActive={path.includes("/asdasd")? true : false}>
                            Logout
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

export default DashboardPage