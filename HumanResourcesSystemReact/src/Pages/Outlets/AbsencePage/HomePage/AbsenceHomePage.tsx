import {Col, Container, Row } from "react-bootstrap"
import MenuCard from "../../../../Components/MenuCard"
import HR1 from "..//..//..//..//..//public/img/HR1.jpg"
import HR2 from "..//..//..//..//..//public/img/HR2.jpg"


const CreateAttendancePage = ()=>{
    return(<>
        <Container className="text-center pt-5 pb-4">
            <span className = "display-6">Welcome to Absence center</span>
        </Container>
        <Container fluid className="mx-0 d-flex justify-content-center pb-3">
            <Row className="w-75">
                <Col className="d-flex">     
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

export default CreateAttendancePage



