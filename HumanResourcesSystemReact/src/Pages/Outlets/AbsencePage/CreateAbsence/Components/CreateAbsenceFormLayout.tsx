import { Button, Container, Form } from "react-bootstrap";
import React, { useCallback, useState } from "react";
import CreateAbsenceFormSelect from "./CreatAbsenceFormSelect";
import CreateAbsenceFormCheck from "./CreateAbsenceFormCheck";
import CreateAbsenceFormDate from "./CreateAbsenceFormDate";
import moment from "moment";
import CreateAbsenceFormTitle from "./CreateAbsenceFormTitle";
import CreateAbsenceOverview from "./CreateAbsenceOverview";
import { useAxiosRequest } from "../../../../../Hooks/useAxiosRequest";
import { CreateAbsenceResponseType } from "../../../../../Utilities/Types";
import { json } from "react-router";
import { useUser } from "../../../../../Hooks/useUserContext";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

type AbsencePeriodType = {
    startDate: string | null,
    endDate: string | null
}



export default function CreateAbsenceFormLayout(){
    const {user} = useUser()
    const [daysCountDecision, setDaysCountDecision] = useState<number>(0)
    const [title, setTitle]= useState<string|null>(null)
    const [absenceType, setAbsenceType] = useState<number>(1)
    const [period, setPeriod] = useState<AbsencePeriodType>(
        {
            startDate: null,
            endDate: null
        }
    )
    const {post, success, error} = useAxiosRequest<CreateAbsenceResponseType>()


    const handleTitle = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }

    const handleAbsenceType = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setAbsenceType(e.target.value as unknown as number)
        console.log(absenceType)
    }

    const handleCheck = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setDaysCountDecision(e.target.value as unknown as number)
        setPeriod({startDate: null, endDate: null})
    }


    const handleSend =async ()=>{
        const response = await post('https://localhost:7068/api/absence/create', {
            body: JSON.stringify({
                name: title,
                absenceTypeId: absenceType,
                startTime : new Date(period.startDate as string),
                endTime: new Date(period.endDate as string)
            })
        },{
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': `Bearer ${user?.token}`
            }
        })
        if(response.status!=200){
            toast.error("Something went wrong")
            return
        }
        toast.success("Well done")
    }

    const handleSingleDateChange = (e:React.ChangeEvent<HTMLDataElement>)=>{
        const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD")
        if(daysCountDecision<=1){
            setPeriod({
                startDate: newDate,
                endDate: newDate
            })
        }
        else {
            setPeriod({...period, [e.target.title]: moment(new Date(e.target.value)).format("YYYY-MM-DD")})
            }
        console.log(period)
    }
    

    return(<>
        <Container fluid className="d-flex flex-column justify-content-center">
            <ToastContainer/>
            {success?
            <>
                <Container className="mt-5 text-center">
                    <h2 className="display-3">Well done</h2>
                    <CreateAbsenceOverview state = {
                        {
                            title : title,
                            absenceType: {
                                value: absenceType
                            },
                            periodOfTime: {
                                startDate: period.startDate,
                                endDate : period.endDate
                            }
                        }
                        }/>
                </Container>
                <Container className="mt-5">
                    <Container className="text-center">
                        <h2 className="display-5">Comeback to home page</h2>
                        <Link className="fs-3" to={"/user"}>Home page</Link>
                    </Container>
                </Container>
            </>
            :
            <>
                <Container className="text-center pt-3">
                    <h2 className="display-3">Welcome to Absence Center</h2>
                    <p className="display-6">Choose Type of your absence</p>
                </Container>
                <Container className="pt-3">
                    <Form>
                        <CreateAbsenceFormTitle handleChange={handleTitle} />
                        <CreateAbsenceFormSelect handleChange={handleAbsenceType}/>
                        <CreateAbsenceFormCheck handleCheck={handleCheck}/>
                        <CreateAbsenceFormDate handleDateChange = {handleSingleDateChange} decision={daysCountDecision}/>
                    </Form>
                    <CreateAbsenceOverview state = {
                        {
                            title : title,
                            absenceType: {
                                value: absenceType
                            },
                            periodOfTime: {
                                startDate: period.startDate,
                                endDate : period.endDate
                            }
                        }
                        }/>
                    <Container fluid className="p-0 mx-0 my-5">
                        <Container className="d-flex justify-content-center">
                            <Button onClick={handleSend} variant="primary" size="lg">Create</Button>
                        </Container>
                    </Container>
                </Container>
            </>}
            
        </Container>
    </>)
}