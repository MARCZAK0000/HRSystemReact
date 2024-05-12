import { useEffect, useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap"
import { useApiCall } from '../../../../Hooks/useApiCall';
import { useUser } from "../../../../Hooks/useUserContext";
import { CurrentDate } from "../../../../Utilities/CurrentDate";
import { ErrorCodeTypes, GetAttendanceDtoType } from "../../../../Utilities/Types";
import { Link } from "react-router-dom";
import axios from "axios";
import ErrorContainer from "../../../../Components/ErrorContainer";

const AttendanceDeparturePage = () =>{
    const [isLocked, setIsLocked] = useState<boolean>(true)
    const [attendance, setAttendance] = useState<GetAttendanceDtoType>({} as GetAttendanceDtoType)
    const user = useUser()
    const sendAttendanceApi = useApiCall<boolean>('https://localhost:7068/api/attendance')
    const [error, setError] = useState<boolean>(false)
    const [errorCode, setErrorCode] = useState<number|undefined>(0)
    const handleSwitch = ()=>{
        setIsLocked(prev=>!prev)
    }
    const getAttendance = async ()=>{

        try {
            const result = await axios.get<GetAttendanceDtoType>(`https://localhost:7068/api/attendance/info/date?date=${CurrentDate()}`,{
                headers: {
                    "Content-type":"Application/json",
                    "Authorization":`Bearer ${user.user?.token}`
                }
            })
            console.log(result.status)  
            setAttendance(result.data)
        } catch (error) {
            if(axios.isAxiosError(error)){
                setErrorCode(error.response?.status)
                console.log('error message: ', error.response?.status);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
              }
        }


    }
    useEffect(()=>{
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
                Id: attendance.id,
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
                {!error?
                <Container className="pt-5">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Arrival Time</th>
                                <th>Created Day</th>
                                <th>IsCompleted</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{attendance.id}</td>
                                <td>{attendance.arrival}</td>
                                <td>{new Date(attendance.createDay).toLocaleDateString()}</td>
                                <td>{attendance.isCompleted?'true':'false'}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
                :
                <ErrorContainer ErrorCode = {errorCode}/>
            }
                <Container className="d-flex justify-content-center pt-3">
                    <Button disabled={isLocked || error} onClick={handleClick} variant="success btn-lg">Close Day</Button>
                </Container>
            </Container>
            
        </Container>
    </>)
}

export default AttendanceDeparturePage