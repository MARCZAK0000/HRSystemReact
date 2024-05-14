import { Container } from "react-bootstrap"
import { useUser } from "../../../../Hooks/useUserContext"
import { CurrentDate } from "../../../../Utilities/CurrentDate"
import { useAxiosRequest } from "../../../../Hooks/useAxiosRequest"
import { toast, ToastContainer } from 'react-toastify';
import AttendanceCreateForm from './ConditionalPages/AttendanceCreateForm';
import AttendanceCreateSuccess from "./ConditionalPages/AttendanceCreateSuccess"
import AttendanceCreateError from "./ConditionalPages/AttendanceCreateError"
import { useCallback } from "react";


const AttendanceCreatePage = ()=>{
    const user = useUser()
    const {post, success, errorCode, error} = useAxiosRequest<boolean>()
    

    const handleClick = useCallback(
        async ()=>{
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
            toast.success("well done")
        }
    ,[]) 

    return(<>
        <Container fluid className="d-flex justify-content-center">
            <ToastContainer/>
            <Container>
                    
                    <Container className="text-center pt-5">
                        <h2 className="display-1">Welcome</h2>
                        <h5 className="display-4">Make your presence known!</h5>
                    </Container>
                    
                    {   
                        !success && !error &&
                            <AttendanceCreateForm handleClick={handleClick}/>
                    }
                    {
                        success &&
                            <AttendanceCreateSuccess/>
                    }
                    {
                        error && 
                            <AttendanceCreateError errorCode={errorCode}/>
                    }
            </Container>
        </Container>
    </>)
}

export default AttendanceCreatePage