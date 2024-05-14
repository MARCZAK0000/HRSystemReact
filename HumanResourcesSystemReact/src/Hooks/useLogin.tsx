import { useState } from 'react';
import { loginStateProps, loginUserResponseProps } from '../Utilities/Types';
import axios, { AxiosHeaders } from 'axios';
import { useUser } from './useUserContext';

type LoginType = {
    error: boolean,
    errorCode: number|undefined
    login : (state: loginStateProps)=>Promise<loginUserResponseProps|undefined>
    success: boolean
}

export function useLogin() :LoginType {

    const [error, setError] = useState<boolean>(false)
    const [errorCode, setErrorCode]= useState<number|undefined>(0)
    const [success, setSuccess] = useState<boolean>(false)
    const login = async (state: loginStateProps)=>{
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
            setSuccess(true)
            setError(false)

            return response.data
        }
        catch(error){
            setError(true)
            if(axios.isAxiosError(error)){
                console.error(error.message)
                setErrorCode(error.response?.status)
            }
        }
    }

    return {error, errorCode, login, success}
}