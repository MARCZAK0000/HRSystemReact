import { Form } from "react-bootstrap"
import { AbsenceTypesInput } from "../../../../../Utilities/input"

export default function CreateAbsenceFormSelect(){
    return(<>
        <Form.Group>
            <Form.Label className="display-6" htmlFor="AbsenceTypeSelect">Absence Type</Form.Label>
            <Form.Select id="AbsenceTypeSelect" size="lg" aria-label="Choose absence Type">
                {AbsenceTypesInput.map((item, index)=>{
                    return(<>
                        <option value={item.value} key={index}>{item.name}</option>
                    </>)
                })}
            </Form.Select> 
        </Form.Group>
    </>)
}