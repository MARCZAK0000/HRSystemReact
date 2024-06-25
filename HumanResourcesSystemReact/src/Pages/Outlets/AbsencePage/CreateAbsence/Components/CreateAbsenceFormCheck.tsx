import { Container, Form } from "react-bootstrap";
import React from 'react';
import { Button } from '../../../../../Components/button';
type CreateAbsenceFormCheckType = {
    handleCheck: (e:React.ChangeEvent<HTMLInputElement>) => void,
}
export default function CreateAbsenceFormCheck({handleCheck}: CreateAbsenceFormCheckType){
    return(<>
        <Form.Group className="pt-5 ">
            <Form.Label className="display-6">Number of days</Form.Label>
            <Container fluid className="pt-3 user-select-none">
                <Form.Check
                    inline
                    className="display-6 button"
                    name = "DaysCountGroupe"
                    type="radio"
                    value={1}
                    label="single"
                    onChange={handleCheck}
                    
                    />
                <Form.Check
                    inline
                    value={2}
                    type="radio"
                    className="display-6 button"
                    name = "DaysCountGroupe"
                    label="multiple"
                    onChange={handleCheck}/>
            </Container>
        </Form.Group>
    </>)
}