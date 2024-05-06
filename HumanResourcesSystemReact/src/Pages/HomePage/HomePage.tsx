import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../Components/button"
import { useState } from "react"
import { loginStateProps } from "../../Utilities/Types"
import { loginInput } from "../../Utilities/input"
import { useLogin } from "../../Hooks/useLogin"
import { useUser } from "../../Hooks/useUserContext"
import { Container, Row } from "react-bootstrap"

const HomePage = ()=>{
    const [state, setState] = useState<loginStateProps>({IsRemember:false} as loginStateProps)
    const navigate = useNavigate()
    const user = useUser();
    const handleClick = async (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        const result = await useLogin(state)

        if(typeof(result) === "undefined"){
            alert("Something went wrong")
            navigate("/login", {replace: true})
            return
        }
        user.setUser({
            email: result.email,
            username: result.username,
            token: result.token
        })
        navigate("/", {replace: true})
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setState({...state, [e.target.name]:e.target.value})
    }

    const rememberHandleChange = ()=>{
        setState({...state, IsRemember: !state.IsRemember})
    }

    return(
            <Container fluid className="d-flex">
                <Row className="flex-grow-1">
                    <div className="col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="container pt-5">
                            <div className="d-flex flex-column">
                                <p className="display-3 text-center">Welcome to HR System</p>
                                <p className="display-5 text-center text-secondary">System TODO</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 h-100 d-flex flex-column justify-content-center">
                        <div className='container text-center'>
                            <h2 className='display-2'>Log In</h2>
                        </div>
                        <form className='ps-4 w-100 border-start' >
                            {loginInput.map((item, index)=>{
                                return(
                                    <div className="mb-3" key={index}>
                                        <label className="form-label fs-4" htmlFor={item.fullname}>{item.fullname}</label>
                                        <input className="form-control" style={{height: '50px'}} name={item.name} type={item.type} onChange={handleChange}></input>
                                    </div>
                                )
                            })}
                            <div>
                                <label className='form-label fs-5'>Remember me?</label>
                                <input style={{height:'15px', width:'20px'}} onChange={rememberHandleChange} type="checkbox"></input>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Button handleClick={handleClick} color="red">
                                    <small className="fs-5">Login</small>
                                </Button>
                            </div>
                            <div className='pt-2'>
                                <p>
                                    <Link to={"/register"}>Create account?</Link>
                                </p>
                                <p>
                                    <Link to={"/forget"}>Forget password?</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </Row>
            </Container>
    )
}

export default HomePage