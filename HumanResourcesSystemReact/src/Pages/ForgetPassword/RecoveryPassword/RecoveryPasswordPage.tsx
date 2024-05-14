import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { Link, useSearchParams } from "react-router-dom"
import { useApiCall } from "../../../Hooks/useApiCall"

import { ToastContainer, toast } from "react-toastify"
import { CurrentHTTPError } from "../../../Utilities/CurrentFetchError"
import { useAxiosRequest } from "../../../Hooks/useAxiosRequest"
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
    const [searchParams] = useSearchParams()
    const apiCall = useApiCall<ResponseType>
        ('https://localhost:7068/api/account/forget_password')

    const {success, put} = useAxiosRequest<ResponseType>()
    const [state, setState]=useState<RecoveryPasswordType>({
        Email : searchParams.get('email'),
        Password: '',
        ConfirmPassword: '',
        Token: searchParams.get('token'),
    })
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setState({...state, 
            [e.target.name]:e.target.value
        })
    }     
    const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const response = await put('https://localhost:7068/api/account/forget_password', {
                body: JSON.stringify(state)   
            },
            {
                headers:{
                    "Content-Type":"Application/json"
                }
            })
        if(typeof(response)===undefined){
            return 
        }
        
        if(!response?.data.result){
            toast.error("Invalid token or invalid Credentials")
        }
    }

    return(
    <>
        <Container fluid className="d-flex">
        <ToastContainer/>
            {
            !success?
            <Container> 
                <Container className="text-center py-5 display-3">Reset Password</Container>
                <Container className="text-center display-6">
                    <span>Please enter new password <br/> and confirm password to update informations</span>
                </Container>
                <Container className="d-flex justify-content-center">
                    <Form onSubmit={handleSubmit} className="ps-2 pt-5 w-50">
                        <Form.Group>
                            <Form.Label className="display-6 pb-1">Password</Form.Label>
                            <Form.Control type="Password" name="Password" onChange={handleChange} placeholder="Enter new Password"/>
                        </Form.Group>
                        <Form.Group className="pt-3">
                            <Form.Label className="display-6 pb-1">Confirm Password</Form.Label>
                            <Form.Control type="Password" name="ConfirmPassword" onChange={handleChange} placeholder="Enter new Password"/>
                        </Form.Group>
                        <Container className="d-flex justify-content-center pt-3">
                            <Button type="submit" variant="primary btn-lg">Send</Button>
                        </Container> 
                    </Form>
                </Container>
                
                <Container style={{fontSize: '18px'}} className="text-center pt-4">
                    <span>Comeback to home page </span>
                    <Link to="/">
                        Home
                    </Link>
                </Container>
            </Container>:
            <Container className="d-flex justify-content-center align-items-center">
               <Container className="text-center">
                    <h2>{apiCall.data.message}</h2>
                    <h2>You changed your password!</h2>
                    <Link to={"/"}>Go to Home Page</Link>
                </Container>
            </Container>
            }
            
        </Container>
    </>
    )
}

export default RecoveryPasswordPage