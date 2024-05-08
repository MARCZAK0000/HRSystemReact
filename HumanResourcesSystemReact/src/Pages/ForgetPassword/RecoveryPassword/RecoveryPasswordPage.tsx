import { useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import { useSearchParams } from "react-router-dom"
import { useApiCall, ApiCallResponse } from "../../../Hooks/useApiCall"
type RecoveryPasswordType = {
    Token: string|null,
    Email: string|null,
    Password: string,
    ConfirmPassword: string
}

type ResponseType = {
    result:boolean,
    message: string
}

const RecoveryPasswordPage = ()=>{
    console.log("Token page")
    const [searchParams] = useSearchParams()
    const apiCall = useApiCall<ResponseType>
        ('https://localhost:7068/api/account/forget_password')

    const [state, setState]=useState<RecoveryPasswordType>({
        Token: searchParams.get('token'),
        Email : searchParams.get('email'),
        Password: '',
        ConfirmPassword: ''
    })
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setState({...state, 
            [e.target.name]:e.target.value
        })
    }     
    const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        await apiCall.fetchFunc( {
            method:"PUT",
            mode:"cors",
            headers:{
                "Content-type":"Application/json"
            },
            body: JSON.stringify(state)
        })
    }

    return(
    <>
        <Container fluid>
            <Row>
                <Col xs={6}>
                    <Container className="display-6">Reset Password</Container>
                    <Container className="text-left">
                        <span>Pleas enter new password and confirm password to update informations</span>
                    </Container>
                    <Form>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="Password" name="Password" onChange={handleChange} placeholder="Enter new Password"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="Password" name="ConfirmPassword" onChange={handleChange} placeholder="Enter new Password"/>
                        </Form.Group>   
                    </Form>
                </Col>
                <Col xs={6}>

                </Col>
            </Row>
        </Container>
    </>
    )
}

export default RecoveryPasswordPage