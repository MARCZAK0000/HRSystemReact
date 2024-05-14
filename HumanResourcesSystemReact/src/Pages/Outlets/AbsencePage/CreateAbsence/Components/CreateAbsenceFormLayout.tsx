import { Container, Form } from "react-bootstrap";
import { AbsenceTypesInput } from "../../../../../Utilities/input";
import React, { useCallback, useState } from "react";
import CreateAbsenceFormSelect from "./CreatAbsenceFormSelect";
import CreateAbsenceFormCheck from "./CreateAbsenceFormCheck";
import CreateAbsenceFormDate from "./CreateAbsenceFormDate";

export default function CreateAbsenceFormLayout(){

    const [daysCountDecision, setDaysCountDecision] = useState<number>(0)

    const handleCheck = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        setDaysCountDecision(e.target.value as unknown as number)
        console.log(e.target.value)
    },[daysCountDecision]) 
    return(<>
        <Container fluid className="d-flex justify-content-center">
            <Container className="pt-3">
                <Form>
                    <CreateAbsenceFormSelect/>
                    <CreateAbsenceFormCheck handleCheck={handleCheck}/>
                    <CreateAbsenceFormDate decision={daysCountDecision}/>
                </Form>
            </Container>
        </Container>
    </>)
}