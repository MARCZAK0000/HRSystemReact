import { useEffect, useState } from "react"
import { Container, ToastContainer } from "react-bootstrap"
import { useUser } from "../../../../Hooks/useUserContext";
import { CurrentDate } from "../../../../Utilities/CurrentDate";
import { GetAttendanceDtoType } from "../../../../Utilities/Types";
import { useAxiosRequest } from "../../../../Hooks/useAxiosRequest";
import { toast } from "react-toastify";
import AttendanceDepartureSuccess from "./DepartureConditionalPages/AttendanceDepartureSucces";
import AttendanceDepartureError from "./DepartureConditionalPages/AttendanceDepartureError";
import AttendanceDeparturePostSuccess from "./DepartureConditionalPages/AttendanceDeparturePostSuccess";

const AttendanceDeparturePage = () =>{
    const [attendance, setAttendance] = useState<GetAttendanceDtoType>({} as GetAttendanceDtoType)
    const getAxios = useAxiosRequest<GetAttendanceDtoType>()
    const postAxios = useAxiosRequest<boolean>()
    const user = useUser()



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
        toast.success("Downloading data: Completed")

    }


    const handleClick = async ()=>{
        const response = await postAxios.put('https://localhost:7068/api/attendance', {
            body: JSON.stringify({
                DepartureDate : CurrentDate(),
                Id: attendance.id}) },{
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

        
    


    useEffect(()=>{
        getAttendance()
    },[])
    return(
    <>
        <Container fluid className="d-flex justify-content-center">
            <ToastContainer/>
            <Container>
                <Container className="text-center pt-5">
                    <h2 className="display-1">Departure</h2>
                    <h5 className="display-4">Goodbye!</h5>
                </Container>
               
                
                {
                    getAxios.success&&!postAxios.error&&!postAxios.success&&
                    <AttendanceDepartureSuccess data = {attendance} handleClick={handleClick}/>
                }
                {
                    getAxios.error&&
                    <AttendanceDepartureError errorCode = {getAxios.errorCode}/>
                }
                {
                     postAxios.error&&
                     <AttendanceDepartureError errorCode = {postAxios.errorCode}/>
                }
                {
                    postAxios.success&&
                    <AttendanceDeparturePostSuccess/>
                }
            </Container>
            
        </Container>
    </>)
}

export default AttendanceDeparturePage