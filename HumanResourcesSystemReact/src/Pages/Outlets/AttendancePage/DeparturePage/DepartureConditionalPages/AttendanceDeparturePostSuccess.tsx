import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AttendanceDeparturePostSuccess(){
    return(
    <>
        <Container className="text-center py-5">
            <h2 className="display-2">Well done</h2>
            <h4 className="display-4">You completed your day of work</h4>
            <p>
                <Link className="display-6" to={"/user/logout"}>
                    Logout
                </Link>
            </p>
            <p>
                <Link className="display-6" to={"/"}>
                    Home Page
                </Link>
            </p>
        </Container>
    </>
    )
}