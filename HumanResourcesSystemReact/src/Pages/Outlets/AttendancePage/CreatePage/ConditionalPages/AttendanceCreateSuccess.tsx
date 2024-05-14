import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AttendanceCreateSuccess(){
    return(
    <>
        <Container className="text-center py-5">
            <h2 className="display-4">Well done, you are present</h2>
            <h6 className="display-6">
                <Link to={"/"}>Home page</Link>
            </h6>
        </Container>
    </>
    )
}