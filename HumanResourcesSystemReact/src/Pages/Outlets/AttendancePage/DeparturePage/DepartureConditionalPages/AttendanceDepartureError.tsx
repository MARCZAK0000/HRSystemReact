import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

type AttendanceDepartureErrorType ={
    errorCode: number|undefined
}

export default function AttendanceDepartureError({errorCode}:AttendanceDepartureErrorType){
    return(
        <>
                        <Container className="text-center py-5">
                            <p className="display-4">There was an error</p>
                            <p>
                                {
                                    errorCode===400&&
                                    <>
                                        <h2 className="display-6">There was a problem with request</h2>
                                        <p className="display-6">Try to refresh page</p>
                                    </>
                                }
                                {
                                errorCode === 404 &&
                                    <>
                                        <h2 className="display-6">You didn't create arrival today</h2>
                                        <span className="display-6">Go back to arrival Create Page</span>
                                        <Link className="display-6" to={"/user/attendance/create"}>Arrival Page</Link>
                                    </>
                                }
                                {
                                errorCode === 401 &&
                                    <>
                                        <h2 className="display-6">Problem with access Token</h2>
                                    </>
                                }
            
                                
                            </p>
                        </Container>
                    </>
    )
}