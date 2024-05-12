import { useState } from 'react';
import { loginStateProps, loginUserResponseProps } from '../Utilities/Types';
import axios, { AxiosHeaders } from 'axios';
import { useUser } from './useUserContext';

type LoginType = {
    result : loginUserResponseProps,
    error: boolean,
    errorCode: number|undefined
    login : (state: loginStateProps)=>Promise<void>
    success: boolean
}

export function useLogin() :LoginType {

    const [result, setResult] = useState<loginUserResponseProps>({} as loginUserResponseProps)
    const [error, setError] = useState<boolean>(false)
    const [errorCode, setErrorCode]= useState<number|undefined>(0)
    const [success, setSuccess] = useState<boolean>(false)
    const user  = useUser()
    const login = async (state: loginStateProps)=>{
        console.log(state)
        console.log(result)
        try
        {
            const response = await axios.post<loginUserResponseProps>("https://localhost:7068/api/account/signin",{
                email: state.Email,
                password: state.Password
            },{
                headers: {
                    "Content-Type":"Application/json"
                }
            })
            if(response.status!=200){
                throw new Error("Login Fetch has error")
            }
            if(!response.data.result){
                throw new Error(response.data.message)
            }
            setResult(response.data)
            setSuccess(true)
            setError(false)
        }
        catch(error){
            setError(true)
            if(axios.isAxiosError(error)){
                console.error(error.message)
                setErrorCode(error.response?.status)
            }
        }
    }
    
    user.setUser({
        email : result.email,
        username: result.username,
        token: result.token,
        refreshToken: result.refreshToken
    })

    return {result, error, errorCode, login, success}
}