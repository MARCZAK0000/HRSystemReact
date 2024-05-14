import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../Components/button"
import { loginInput } from '../../Utilities/input';
import { useState } from "react"
import { loginStateProps } from "../../Utilities/Types";
import { useUser } from "../../Hooks/useUserContext";
import { useLogin } from "../../Hooks/useLogin";
import { ToastContainer, toast } from "react-toastify";
import { CurrentHTTPError } from "../../Utilities/CurrentFetchError";
const LoginPage = ()=>{

    const [state, setState] = useState<loginStateProps>({IsRemember: false} as loginStateProps)
    const user = useUser()
    const navigate = useNavigate()
    const {error, errorCode, login ,success} = useLogin()


    const handleClick = async (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        const result = await login(state)

        if(error){
            toast.error(CurrentHTTPError(errorCode))
        }
        if(!success){
            toast.error("Invalid Email or Password")
        }

        if(typeof(result) === "undefined"){
            //alert("Something went wrong")
            //navigate("/login", {replace: true})
            return
        }
        user.setUser({
            email: result.email,
            username: result.username,
            token: result.token,
            refreshToken: result.refreshToken
        })

        localStorage.setItem('RefreshToken', result.refreshToken)
        navigate("/", {replace: true})

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setState({...state, [e.target.name]: e.target.value})
    }

    const rememberHandleChange = ()=>{
        setState({...state, IsRemember: !state.IsRemember})
    }


    return(
        <div className="container-fluid flex-grow-1">
           <ToastContainer/> 
            <div className="container pt-5 pb-5">
                <div className="text-center">
                    <h2 className="display-3">Log in</h2>
                </div>
                <div className="row py-5">
                    <div className="col-sm-6">
                        <div className="container-fluid">
                            <form>
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
                                        <Link to={"/"}>Create account?</Link>
                                    </p>
                                    <p>
                                        <Link to={"/"}>Forget password?</Link>
                                    </p>
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



export default LoginPage