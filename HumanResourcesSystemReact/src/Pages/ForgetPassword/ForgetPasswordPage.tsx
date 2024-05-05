import React, { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"

type ForgetPasswordType = {
    email: string,
    phone: string
}

const ForgetPasswordPage = ()=>{
    const [state, setState] = useState<ForgetPasswordType>({
        email: '',
        phone: ''
    })
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setState(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            console.log(state)
        }
        catch(err){

        }
    }
    return(
    <>
        <Container className = "flex-grow-1 d-flex justify-content align-items-center">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email"/>
                </Form.Group>
                <Button variant="primary" type="submit">Send</Button>
            </Form>
        </Container>
    </>)
}


export default ForgetPasswordPage