import { Container, Form } from "react-bootstrap";
import React, { useCallback, useState } from "react";
import CreateAbsenceFormSelect from "./CreatAbsenceFormSelect";
import CreateAbsenceFormCheck from "./CreateAbsenceFormCheck";
import CreateAbsenceFormDate from "./CreateAbsenceFormDate";
import moment from "moment";
import CreateAbsenceFormTitle from "./CreateAbsenceFormTitle";
import CreateAbsenceOverview from "./CreateAbsenceOverview";

type AbsencePeriodType = {
    startDate: string,
    endDate: string
}

type TypeAbsenceType = {
    name: string,
    value: number
}

export default function CreateAbsenceFormLayout(){

    const [daysCountDecision, setDaysCountDecision] = useState<number>(0)
    const [title, setTitle]= useState<string>('')
    const [absenceType, setAbsenceType] = useState<TypeAbsenceType>({
        name: '',
        value: 0
    })
    const [period, setPeriod] = useState<AbsencePeriodType>(
        {
            startDate: moment(new Date()).format("YYYY-MM-DD"),
            endDate: moment(new Date()).format("YYYY-MM-DD")
        }
    )

    const handleTitle = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }

    const handleAbsenceType = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setAbsenceType({name: e.target.name, value : e.target.value as unknown as number })
    }

    const handleCheck = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setDaysCountDecision(e.target.value as unknown as number)
        console.log(e.target.value)
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
        <Container fluid className="d-flex justify-content-center">
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
                            name: absenceType.name
                        },
                        periodOfTime: {
                            startDate: period.startDate,
                            endDate : period.endDate
                        }
                    }
                    }/>
            </Container>
        </Container>
    </>)
}