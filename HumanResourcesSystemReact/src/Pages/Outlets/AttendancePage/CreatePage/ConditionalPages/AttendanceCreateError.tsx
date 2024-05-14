import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
type AttendanceCreateErrorType = {
    errorCode: number|undefined
}
export default function AttendanceCreateError({errorCode}: AttendanceCreateErrorType){
    return(
        <>
            <Container className="text-center py-5">
                <h2 className="display-4">Something went wrong, try again later</h2>
                {
                    errorCode === 400 &&
                    <p className="display-5">Maybe you checked your absence Today</p> 
                }
                {
                    errorCode === 401 &&
                    <p className="display-5">There is a problem with access Token</p> 
                }
                {
                    errorCode === 404 &&
                    <p className="display-5">User Not Found</p> 
                }

                <h6 className="display-6">
                    <Link to={"/"}>Home page</Link>
                </h6>
            </Container>
        </>
    )
}