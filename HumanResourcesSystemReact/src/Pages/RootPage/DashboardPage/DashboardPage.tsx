import { useEffect} from 'react';
import { useUser } from '../../../Hooks/useUserContext';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { useUserInformations } from '../../../Hooks/useUserInformations';
import React from 'react';

type childrenType = {
    children: React.ReactNode
}

const DashboardPage = () => {
    console.log("XD")
    const info = useUserInformations();
    const user = useUser()
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
                        <ListGroup title='Menu'>
                            <ListGroupItem>
                                <Link to="/">Home</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to="/user/arrivals">Arrivals</Link>
                            </ListGroupItem>
                            <ListGroupItem className='nav-item'>
                                <Link to="/user/absence">Absences</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to ="/account/settings">Settings</Link>
                            </ListGroupItem>
                        </ListGroup>
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