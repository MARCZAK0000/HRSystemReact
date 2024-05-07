import React, { useState } from "react"
import { Alert, Button, Container, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

type ForgetPasswordType = {
    email: string,
    phone: string
}

type ResponseType = {
    result: boolean,
    message: string
}

const ForgetPasswordPage = ()=>{
    const [state, setState] = useState<ForgetPasswordType>({
        email: '',
        phone: ''
    })
    const [isSend, setIsSend] = useState<boolean>(false)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setState(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            const response = await fetch(
                `https://localhost:7068/api/account/forget_password?Email=${state.email}&PhoneNumber=${state.phone}`,{
                    method:"GET",
                    mode:"cors",
                    headers:{
                        'content-type':'application/json'
                    }
                })
            if(!response.ok){
                throw new Error("Invalid response from Forget Password")
            }
            
            const result : ResponseType = await response.json()
            
            if(!result.result){
                alert("There was a problem with your data. Check your data and send it back")
                return
            }
            setIsSend(true)

        }
        catch(err){
            console.log(err)
            alert("Try again later")
        }
    }
    return(
    <>
        {!isSend?
        <Container className = "flex-grow-1 d-flex flex-column">
            <Container className="py-5 display-4 text-center">
                Forget Password?
            </Container>
            <Container className="text-center display-6 w-75">Enter the email address and 
                    phone number associated and we'll send you a link to reset password</Container>
            <Container className="flex-grow-1 d-flex align-items-center flex-column py-5">
                <Form onSubmit={handleSubmit} className="w-50 pt-3">
                    <Form.Group >
                        <Form.Label className="">Email</Form.Label>
                        <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group className="pt-3">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control name="phone" onChange={handleChange} type="phone" placeholder="Enter Phone"/>
                    </Form.Group>
                    <Container className="text-center pt-4">
                        <Button variant="primary btn-lg" type="submit">Send</Button>
                    </Container>
                </Form>
                <Container className="text-center pt-5">
                    <Container>
                        <span>If you have account</span>
                        <Link to="/login">
                            Log In
                        </Link>
                    </Container>
                    <Container>
                        <span>Don't have account?</span>
                        <Link to="/register">
                            Sing Up
                        </Link>
                    </Container>
                </Container>
            </Container>
        </Container>
        :
        <>
            <Container className="flex-grow-1 d-flex justify-content-center align-items-center">
                <Container className="text-center">
                    <h2>Check your email to end process of recovery password</h2>
                    <Link to={"/"}>Go to Home Page</Link>
                </Container>
            </Container>
        </>
        }
    </>)
}


export default ForgetPasswordPage