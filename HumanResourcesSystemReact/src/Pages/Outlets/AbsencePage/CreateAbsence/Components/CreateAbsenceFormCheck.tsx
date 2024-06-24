import { Container, Form } from "react-bootstrap";
import React from 'react';
type CreateAbsenceFormCheckType = {
    handleCheck: (e:React.ChangeEvent<HTMLInputElement>) => void,
}
export default function CreateAbsenceFormCheck({handleCheck}: CreateAbsenceFormCheckType){
    return(<>
        <Form.Group className="pt-5">
            <Form.Label className="display-6">Number of days</Form.Label>
            <Container fluid className="pt-3">
                <Form.Check
                    inline
                    className="display-6"
                    name = "DaysCountGroupe"
                    type="radio"
                    value={1}
                    label="single"
                    onChange={handleCheck}
                    checked
                    />
                <Form.Check
                    inline
                    value={2}
                    type="radio"
                    className="display-6"
                    name = "DaysCountGroupe"
                    label="multiple"
                    onChange={handleCheck}/>
            </Container>
        </Form.Group>
    </>)
}