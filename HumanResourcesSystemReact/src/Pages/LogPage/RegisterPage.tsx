import { registerInput } from "../../Utilities/input"
import { Button } from "../../Layouts/button"
import React, { useState } from "react"
import { ErrorResponse, registerStateProps } from '../../Utilities/Types';
import { useNavigate } from "react-router"
import { validator } from "../../Utilities/Validator"






type responseOptions = {
    result : boolean
    message :string
}

export const RegisterPage : React.FunctionComponent = ()=>{

    const [state, setState] = useState<registerStateProps>({} as registerStateProps)
    const navigate = useNavigate()
   




    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setState({...state, [e.target.name]:e.target.value})
    } 
    const handleClick = async (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        const stateString = JSON.stringify(state)
        const checkValidation: string = validator(stateString)
        if(checkValidation.toLowerCase()!=""){
            alert(checkValidation)
            return
        }

        try {
            const request = await fetch("https://localhost:7068/api/user/register", {
                method: 'POST', 
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(state)
            })
            console.log(request)
            if(!request.ok){
                const errorResponse : ErrorResponse = await request.json()
                alert(errorResponse.Detail)
                throw new Error(JSON.stringify(errorResponse))
            }
            const data = await request.json() as responseOptions
            console.log(data);
            
            console.log(data.result)
            if(!data.result){
                alert(data.message)
                navigate('/register', {replace: true})
                return
            }
            alert(data.message)
            navigate('/', {replace: true})

        } catch (error) {
            console.error(error)
        }
        
    }


    return(
        <div className="container-fluid flex-grow-1">
            <div className="container pt-5 pb-5">
                <div className="text-center">
                    <h2 className="display-3">Create Account</h2>
                </div>
                <div className="row py-3">
                    <div className="col-sm-6">
                        <div className="container-fluid">
                            <form>
                                {registerInput.map((registerInput, index)=>{
                                    return(
                                        <div className="mb-3" key={index}>
                                            <label className="form-label fs-4" htmlFor={registerInput.fullname}>{registerInput.fullname}</label>
                                            <input className="form-control" style={{height: '50px'}} name={registerInput.name} type={registerInput.type} onChange={handleChange}></input>
                                           
                                        </div>
                                    )
                                })}
                                <div className="container-fluid d-flex justify-content-center">
                                    <Button handleClick={handleClick} color="red">
                                        <small className="fs-5">Register</small>
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6 border-start border-dark">
                        <div className="container h-100">
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <h2 className="display-1 text-center">There is no other authorization system</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default RegisterPage



