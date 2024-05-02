import {Col, Row } from "react-bootstrap"
import MenuCard from "../../../../Components/MenuCard"

const AbsenceHomePage = ()=>{
    return(<>
       <Row className = "h-100">
            <Col>
                <MenuCard link="/user/absence" color="primary">
                    <p>Home</p>
                </MenuCard>
            </Col>
             <Col>
                 
                    <MenuCard link="/user/absence/create" color="primary">
                        <p>Create Absence</p>
                    </MenuCard>
             </Col> 
            <Col>
                <MenuCard link="/user/absence/info" color="primary">
                    <p>Absence Info</p>
                </MenuCard>
            </Col>
       </Row>
    </>)
}

export default AbsenceHomePage



