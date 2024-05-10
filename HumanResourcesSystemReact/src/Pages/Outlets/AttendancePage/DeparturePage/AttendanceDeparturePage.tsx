import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useApiCall } from '../../../../Hooks/useApiCall';
import { useUser } from "../../../../Hooks/useUserContext";
import { useUserInformations } from "../../../../Hooks/useUserInformations";
import { CurrentDate } from "../../../../Utilities/CurrentDate";

const AttendanceDeparturePage = () =>{
    const [isLocked, setIsLocked] = useState<boolean>(true)

    const user = useUser()
    const userInfo = useUserInformations()
    const apiCall = useApiCall<boolean>('https://localhost:7068/api/attendance')
    const handleSwitch = ()=>{
        setIsLocked(prev=>!prev)
    }

    const handleClick = async ()=>{
        await apiCall.fetchFunc({
            method:'PUT',
            mode: 'cors',
            headers:{
                'Content-type':'Application/json',
                'Authorization':`Bearer ${user.user?.token}`
            },
            body: JSON.stringify({
                userId: userInfo.userInfo?.userId,
                departureDate: CurrentDate()
            })
        })

        if(apiCall.error|| apiCall.data == false){
            alert('Something went wrong, try again later')
        }
    }
    return(
    <>
        <Container fluid className="d-flex justify-content-center">
            <Container>
                <Container className="text-center pt-5">
                    <h2 className="display-1">Departure</h2>
                    <h5 className="display-4">Goodbye!</h5>
                </Container>
                <Container className="text-center pt-5">
                    <span className="display-6">Unlock button and then click it to create departure</span>
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
                    <Button disabled={isLocked} onClick={handleClick} variant="success btn-lg">Close Day</Button>
                </Container>

            </Container>
        </Container>
    </>)
}

export default AttendanceDeparturePage