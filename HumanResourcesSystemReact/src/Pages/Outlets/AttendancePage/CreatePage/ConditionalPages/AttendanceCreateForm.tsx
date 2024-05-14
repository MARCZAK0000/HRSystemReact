import { useCallback, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";


type AttendanceCreateFormType={
    handleClick: ()=>Promise<void>
}
export default function AttendanceCreateForm({handleClick}:AttendanceCreateFormType){
    const[isLocked, setIsLocked] = useState<boolean>(true)

    const handleSwitch = useCallback(()=>{
        setIsLocked(prev=>!prev)
    }, [isLocked])
    
    return(
    <>
        <Container className="text-center pt-5">
            <span className="display-6">Unlock button and then click it to create arrival</span>
        </Container>
        <Container className="d-flex justify-content-center pt-5">
            <Form>
                <Form.Check style={{fontSize: '25px'}}
                    type="switch"
                    label={isLocked?"Unlock button": "Lock button"}
                    onChange={handleSwitch}/>
            </Form>
        </Container>
        <Container className="d-flex justify-content-center pt-3">
            <Button disabled={isLocked} onClick={handleClick} variant="success btn-lg">Create</Button>
        </Container>
    </>
    )
}