import { Button, Container, Form, Table } from "react-bootstrap"
import { GetAttendanceDtoType } from "../../../../../Utilities/Types"
import { useState } from "react"

type AttendanceDepartureSuccessType = {
    data: GetAttendanceDtoType
    handleClick : ()=> Promise<void>
}
export default function AttendanceDepartureSuccess({data, handleClick} : AttendanceDepartureSuccessType){
    const [isLocked, setIsLocked] = useState<boolean>(true)
    const handleSwitch = ()=>{
        setIsLocked(prev=>!prev)
    }

    return(
        <>
            <Container className="text-center py-5">
                        <span className="display-6">Unlock button and then click it to create departure</span>
                    </Container>
                    <Container className="d-flex justify-content-center pt-5">
                    <Form>
                        <Form.Check style={{fontSize: '25px'}}
                            type="switch"
                            label={isLocked?"Unlock button": "Lock button"}
                            onChange={handleSwitch}/>
                    </Form>
                    </Container>
                    <Container className="pt-5">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Arrival Time</th>
                                    <th>Created Day</th>
                                    <th>IsCompleted</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.arrival}</td>
                                    <td>{new Date(data.createDay).toLocaleDateString()}</td>
                                    <td>{data.isCompleted?'true':'false'}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                    <Container className="d-flex justify-content-center py-3">
                        <Button disabled={isLocked} onClick={handleClick} variant="success btn-lg">Close Day</Button>
                    </Container>
        </>
    )
}