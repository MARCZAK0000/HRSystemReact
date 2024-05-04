import {Col, Container, Row } from "react-bootstrap"
import MenuCard from "../../../../Components/MenuCard"
import HR1 from "..//..//..//..//..//public/img/HR1.jpg"
import HR2 from "..//..//..//..//..//public/img/HR2.jpg"
import HR3 from "..//..//..//..//..//public/img/HR3.jpg"
const AbsenceHomePage = ()=>{
    return(<>
        <Container className="text-center pb-4 pt-3">
            <span className = "display-6">Welcome to absence center</span>
        </Container>
        <Container>
            <Row className = "h-80 d-flex align-items-center">
                <Col>     
                        <MenuCard img = {HR2} link="/user/absence/create" color="success">
                            <p>Create Absence</p>
                        </MenuCard>
                </Col> 
                <Col>
                    <MenuCard img = {HR1} link="/user/absence/info" color="danger">
                        <p>Absence Info</p>
                    </MenuCard>
                </Col>
            </Row>
        </Container>
    </>)
}

export default AbsenceHomePage



