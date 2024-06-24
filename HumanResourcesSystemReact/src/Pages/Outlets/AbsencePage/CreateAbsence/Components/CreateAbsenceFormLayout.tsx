import { Container, Form } from "react-bootstrap";
import React, { useCallback, useState } from "react";
import CreateAbsenceFormSelect from "./CreatAbsenceFormSelect";
import CreateAbsenceFormCheck from "./CreateAbsenceFormCheck";
import CreateAbsenceFormDate from "./CreateAbsenceFormDate";

type AbsencePeriodType = {
    startDate: string,
    endDate: string
}

export default function CreateAbsenceFormLayout(){

    const [daysCountDecision, setDaysCountDecision] = useState<number>(0)

    const [period, setPeriod] = useState<AbsencePeriodType>(
        {
            startDate: new Date().toJSON(),
            endDate: new Date().toJSON()
        }
    )

    const handleCheck = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        setDaysCountDecision(e.target.value as unknown as number)
        console.log(e.target.value)
    },[daysCountDecision]) 


    const handleSingleDateChange = (e:React.ChangeEvent<HTMLDataElement>)=>{
        const newDate = new Date(e.target.value)
        if(daysCountDecision<=1){
            setPeriod({
                startDate: newDate.toJSON(),
                endDate: newDate.toJSON()
            })
        }
        else {
            setPeriod({...period, [e.target.title]: e.target.value})
        }

        console.log(period)
    }
    

    return(<>
        <Container fluid className="d-flex justify-content-center">
            <Container className="pt-3">
                <Form>
                    <CreateAbsenceFormSelect/>
                    <CreateAbsenceFormCheck handleCheck={handleCheck}/>
                    <CreateAbsenceFormDate handleDateChange = {handleSingleDateChange} decision={daysCountDecision}/>
                </Form>
            </Container>
        </Container>
    </>)
}