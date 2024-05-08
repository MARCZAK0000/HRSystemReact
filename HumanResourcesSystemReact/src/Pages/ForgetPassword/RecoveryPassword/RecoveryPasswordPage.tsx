import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useSearchParams } from "react-router-dom"
import { useApiCall } from "../../../Hooks/useApiCall"
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
    
    const [state, setState]=useState<RecoveryPasswordType>({
        Token: searchParams.get('token'),
        Email : searchParams.get('email'),
        Password: '',
        ConfirmPassword: ''
    })

    const apiCall = useApiCall<ResponseType>('https://localhost:7068/api/account/forget_password', {
        method:"PUT",
        mode:"cors",
        headers:{
            "Content-type":"Application/json"
        },
        body: JSON.stringify(state)
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setState({...state, 
            [e.target.name]:e.target.value
        })
    }     

    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
    }

    return(
    <>
        <Container fluid></Container>
    </>
    )
}

export default RecoveryPasswordPage