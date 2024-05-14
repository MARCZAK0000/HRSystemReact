import { Container } from "react-bootstrap"
import CreateAbsenceFormLayout from "./Components/CreateAbsenceFormLayout"

const CreateAbsencePage = ()=>{
    return(<>
        <Container fluid>
            <Container className="text-center pt-3">
                <h2 className="display-3">Welcome to Absence Center</h2>
                <p className="display-6">Choose Type of your absence</p>
            </Container>
            <CreateAbsenceFormLayout/>
        </Container>
    </>)
}

export default CreateAbsencePage