import { Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"
import React from 'react';

type CreateAbsenceFormDateType = {
    decision: number,
    handleDateChange: (e:React.ChangeEvent<HTMLDataElement>)=> void
   
}

export default function CreateAbsenceFormDate({decision, handleDateChange}: CreateAbsenceFormDateType){
    return(
      <> 
        <Container fluid className="mt-5 p-0 m-0">
            {decision<=1?
            <>
                    <Form>
                        <FormGroup>
                            <FormLabel className="display-5">Choose day</FormLabel>
                            <FormControl type="date" onChange={handleDateChange}/>
                        </FormGroup>
                    </Form>
            </>:
            <>
                <Row>
                    <Col xs={6} className="p-0 m-0">
                        <Container fluid>
                            <FormGroup>
                                <FormLabel className="display-5">Choose start day</FormLabel>
                                <FormControl title="startDate" onChange={handleDateChange} type="date"/>
                            </FormGroup>
                        </Container>
                    </Col>
                    <Col xs={6} className="p-0 m-0">
                        <Container fluid>
                            <FormGroup>
                                <FormLabel className="display-5">Choose last day</FormLabel>
                                <FormControl title="endDate" onChange={handleDateChange} type="date"/>
                            </FormGroup>
                        </Container>
                    </Col>
                </Row>
            </>}
        </Container>
           
    </>)
}