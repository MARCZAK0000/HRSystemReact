import { useEffect, useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap"
import { useApiCall } from '../../../../Hooks/useApiCall';
import { useUser } from "../../../../Hooks/useUserContext";
import { CurrentDate } from "../../../../Utilities/CurrentDate";
import { ErrorCodeTypes, GetAttendanceDtoType } from "../../../../Utilities/Types";
import { Link } from "react-router-dom";
import axios from "axios";
import ErrorContainer from "../../../../Components/ErrorContainer";
import { useAxiosRequest } from "../../../../Hooks/useAxiosRequest";

const AttendanceDeparturePage = () =>{
    const [isLocked, setIsLocked] = useState<boolean>(true)
    const [attendance, setAttendance] = useState<GetAttendanceDtoType>({} as GetAttendanceDtoType)
    const getAxios = useAxiosRequest<GetAttendanceDtoType>()
    const user = useUser()
    const handleSwitch = ()=>{
        setIsLocked(prev=>!prev)
    }
    const getAttendance = async ()=>{
        const response = await getAxios
            .get(`https://localhost:7068/api/attendance/info/date?date=${CurrentDate()}`,{

            headers:{
                'Content-Type':"Application/json",
                "Authorization":`Bearer ${user.user?.token}`
            }
        })

        if(typeof(response)===undefined){
            return
        }

        setAttendance(response.data)
        // try {
        //     const result = await axios.get<GetAttendanceDtoType>(`https://localhost:7068/api/attendance/info/date?date=${CurrentDate()}`,{
        //         headers: {
        //             "Content-type":"Application/json",
        //             "Authorization":`Bearer ${user.user?.token}`
        //         }
        //     })
        //     console.log(result.status)  
        //     setAttendance(result.data)
        // } catch (error) {
        //     if(axios.isAxiosError(error)){
        //         setErrorCode(error.response?.status)
        //         console.log('error message: ', error.response?.status);
        //         return error.message;
        //     }
        //     else {
        //         console.log('unexpected error: ', error);
        //         return 'An unexpected error occurred';
        //       }
        // }


    }
    useEffect(()=>{
        getAttendance()
    },[])
    const handleClick = async ()=>{
        // await sendAttendanceApi.fetchFunc({
        //     method:'PUT',
        //     mode: 'cors',
        //     headers:{
        //         'Content-type':'Application/json',
        //         'Authorization':`Bearer ${user.user?.token}`
        //     },
        //     body: JSON.stringify({
        //         Id: attendance.id,
        //         departureDate: CurrentDate()
        //     })
        // })

        // if(sendAttendanceApi.error|| sendAttendanceApi.data == false){
        //     alert('Something went wrong, try again later')
        // }
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
                {getAxios.success&&
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
                }
                <Container className="d-flex justify-content-center py-3">
                    <Button disabled={isLocked || getAxios.error} onClick={handleClick} variant="success btn-lg">Close Day</Button>
                </Container>
            </Container>
            
        </Container>
    </>)
}

export default AttendanceDeparturePage