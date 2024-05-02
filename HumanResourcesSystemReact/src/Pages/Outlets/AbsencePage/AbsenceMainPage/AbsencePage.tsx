import { Container } from "react-bootstrap"
import { Outlet } from "react-router"

const AbsencePage = ()=>{

    return(<>
        <Container className="d-flex justify-content-center align-items-center h-100">
            Create Absence Page
            <Outlet/>
        </Container>
    </>)
}

export default AbsencePage