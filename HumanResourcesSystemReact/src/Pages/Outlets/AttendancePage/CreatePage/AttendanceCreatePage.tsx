import { Button, Container, Form } from "react-bootstrap"
import { useApiCall } from "../../../../Hooks/useApiCall"
import { useUser } from "../../../../Hooks/useUserContext"
import { useState } from "react"
import { CurrentDate } from "../../../../Utilities/CurrentDate"

type AttendanceCreatePageType = {
    ArrivalDate: Date
}

const AttendanceCreatePage = ()=>{
    const apiCall  = useApiCall<boolean>('https://localhost:7068/api/attendance')
    const user = useUser()
    const date : Date = new Date()

    const[isLocked, setIsLocked] = useState<boolean>(true)

    const handleClick = async ()=>{
        await apiCall.fetchFunc({
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-type':'application/json',
                'Authorization':`Bearer ${user.user?.token}`
            },
            body: JSON.stringify({ArrivalDate : CurrentDate()})
        })
        if(apiCall.error|| apiCall.data == false){
            alert('Something went wrong, try again later')
        }
    }

    const handleSwitch = ()=>{
        setIsLocked(prev=>!prev)
    }
    return(<>
        <Container fluid className="d-flex justify-content-center">
            <Container>
                <Container className="text-center pt-5">
                    <h2 className="display-1">Welcome</h2>
                    <h5 className="display-4">Make your presence known!</h5>
                </Container>
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

            </Container>
        </Container>
    </>)
}

export default AttendanceCreatePage