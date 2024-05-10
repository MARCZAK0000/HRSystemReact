import { useEffect, useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useApiCall } from '../../../../Hooks/useApiCall';
import { useUser } from "../../../../Hooks/useUserContext";
import { CurrentDate } from "../../../../Utilities/CurrentDate";
import { GetAttendanceDtoType } from "../../../../Utilities/Types";

const AttendanceDeparturePage = () =>{
    const [isLocked, setIsLocked] = useState<boolean>(true)
    const [attendance, setAttendance] = useState<GetAttendanceDtoType>({} as GetAttendanceDtoType)
    const user = useUser()
    const sendAttendanceApi = useApiCall<boolean>('https://localhost:7068/api/attendance')

    const handleSwitch = ()=>{
        setIsLocked(prev=>!prev)
    }

    useEffect(()=>{
        const getAttendance = async () =>{
            try {
                const response = await fetch(`https://localhost:7068/api/attendance/info/date?date=${CurrentDate()}`,{
                    method: "GET",
                    mode:"cors",
                    headers: {
                        "Content-type":"Application/json",
                        "Authorization":`Bearer ${user.user?.token}`
                    }
                })
                if(!response.ok){
                    throw new Error("getAttendance: Error")
                }
                const result : GetAttendanceDtoType = await response.json()
                console.log(result)
                setAttendance(prev=>({...prev, ...result}))
    
            } catch (error) {
                console.log(error);
                
            }
            console.log(attendance)
        }

        getAttendance()
    },[])
    const handleClick = async ()=>{
        await sendAttendanceApi.fetchFunc({
            method:'PUT',
            mode: 'cors',
            headers:{
                'Content-type':'Application/json',
                'Authorization':`Bearer ${user.user?.token}`
            },
            body: JSON.stringify({
                departureDate: CurrentDate()
            })
        })

        if(sendAttendanceApi.error|| sendAttendanceApi.data == false){
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
                <Button>Hello</Button>
            </Container>
        </Container>
    </>)
}

export default AttendanceDeparturePage