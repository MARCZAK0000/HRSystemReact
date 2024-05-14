import { Button, Container, Form } from "react-bootstrap"
import { useApiCall } from "../../../../Hooks/useApiCall"
import { useUser } from "../../../../Hooks/useUserContext"
import { useState } from "react"
import { CurrentDate } from "../../../../Utilities/CurrentDate"
import { useAxiosRequest } from "../../../../Hooks/useAxiosRequest"
import { toast, ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom"


const AttendanceCreatePage = ()=>{
    const apiCall  = useApiCall<boolean>('https://localhost:7068/api/attendance')
    const user = useUser()
    const date : Date = new Date()
    const {post, success, errorCode, error} = useAxiosRequest<boolean>()
    const[isLocked, setIsLocked] = useState<boolean>(true)

    const handleClick = async ()=>{
        const response = await post('https://localhost:7068/api/attendance', {
                body: JSON.stringify({ArrivalDate : CurrentDate()})
            },{
                headers: {
                    'Content-type':'application/json',
                    'Authorization':`Bearer ${user.user?.token}`
                }
            }
        )
        if(!response.data){
            toast.error("There is a problem to save your arrivals, try again later")
            return
        }
        toast.done("well done")
        // await apiCall.fetchFunc({
        //     method: "POST",
        //     mode: 'cors',
        //     headers: {
        //         'Content-type':'application/json',
        //         'Authorization':`Bearer ${user.user?.token}`
        //     },
        //     body: JSON.stringify({ArrivalDate : CurrentDate()})
        // })
        // if(apiCall.error|| apiCall.data == false){
        //     alert('Something went wrong, try again later')
        // }
    }

    const handleSwitch = ()=>{
        setIsLocked(prev=>!prev)
    }
    return(<>
        <Container fluid className="d-flex justify-content-center">
            <ToastContainer/>
            <Container>
                    
                    <Container className="text-center pt-5">
                        <h2 className="display-1">Welcome</h2>
                        <h5 className="display-4">Make your presence known!</h5>
                    </Container>
                    
                    {   !success && !error &&
                       <> 
                            <Container className="text-center pt-5">
                                <span className="display-6">Unlock button and then click it to create arrival</span>
                            </Container>
                            <Container className="d-flex justify-content-center pt-5">
                                <Form>
                                    <Form.Check style={{fontSize: '25px'}}
                                        type="switch"
                                        label={isLocked?"Unlock button": "Lock button"}
                                        onChange={handleSwitch}/>
                                </Form>
                            </Container>
                            <Container className="d-flex justify-content-center pt-3">
                                <Button disabled={isLocked} onClick={handleClick} variant="success btn-lg">Create</Button>
                            </Container>
                        </>
                    }
                    {
                        success &&
                        <>
                            
                                <Container className="text-center py-5">
                                    <h2 className="display-4">Well done, you are present</h2>
                                    <h6 className="display-6">
                                        <Link to={"/"}>Home page</Link>
                                    </h6>
                                </Container>
                        </>
                    }
                    {
                        error && 
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
                    }
            </Container>
        </Container>
    </>)
}

export default AttendanceCreatePage