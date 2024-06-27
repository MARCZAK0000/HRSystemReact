import { Form } from 'react-bootstrap';
import { AbsenceTypesInput } from "../../../../../Utilities/input"
import React from 'react';

type CreateAbsenceFormSelectType = {
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function CreateAbsenceFormSelect({handleChange}: CreateAbsenceFormSelectType){
    return(<>
        <Form.Group className="mt-5">
            <Form.Label className="display-6" htmlFor="AbsenceTypeSelect">Absence Type</Form.Label>
            <Form.Select id="AbsenceTypeSelect" onChange={handleChange} size="lg" aria-label="Choose absence Type">
                {AbsenceTypesInput.map((item, index)=>{
                    return(<>
                        <option value={item.value} key={index}>{item.name}</option>
                    </>)
                })}
            </Form.Select> 
        </Form.Group>
    </>)
}