import { Col, Container, Row } from "react-bootstrap"
import MenuCard from "../../../../Components/MenuCard"
import HR1 from "..//..//..//..//..//public/img/HR1.jpg"
import HR2 from "..//..//..//..//..//public/img/HR2.jpg"
import HR3 from "..//..//..//..//..//public/img/HR3.jpg"
import { ToastContainer } from "react-toastify"
const AttendanceHomePage = ()=>{

    return(<>
        <ToastContainer/>
        <Container className="text-center pt-5 pb-4">
            <span className = "display-6">Welcome to Attendance center</span>
        </Container>
        <Container fluid className="mx-0">
            <Row>
                <Col className="d-flex justify-content-center">     
                    <MenuCard img = {HR3} link="/user/attendance/create" color="success">
                        <p>Arrival</p>
                    </MenuCard>
                </Col> 
                <Col className="d-flex justify-content-center">     
                    <MenuCard img = {HR2} link="/user/attendance/close" color="primary">
                        <p>Departure</p>
                    </MenuCard>
                </Col> 
            </Row>
            <Container className="mt-5 mb-3 d-flex justify-content-center">
                <Row className="w-50">
                    <Col>
                        <MenuCard img = {HR1} link="/user/attendance/info" color="danger">
                            <p>Stats</p>
                        </MenuCard>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>)
}

export default AttendanceHomePage