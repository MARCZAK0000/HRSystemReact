import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

type AxiosRequest<T> = {
    error: boolean, 
    errorCode: number|undefined,
    success: boolean
    put: (url: string, method: RequestInit, config: AxiosRequestConfig)=>Promise<AxiosResponse<T, any>>
    post:(url: string, method: RequestInit, config: AxiosRequestConfig) =>Promise<AxiosResponse<T, any>>
    get:(url: string, method:AxiosRequestConfig)=>Promise<AxiosResponse<T, any>>
}


export function useAxiosRequest<T>(): AxiosRequest<T>{
    const [error, setError] = useState<boolean>(false)
    const [errorCode, setErrorCode] = useState<number|undefined>(0)
    const [success, setSuccess] = useState<boolean>(false)

    const put = async(url: string, method: RequestInit, config: AxiosRequestConfig)
        : Promise<any> =>{
        const body = method.body
        try {
            const response = await axios.put<T>(url, body ,config)
            if(response.status==200){
                setSuccess(true)
                setError(false)
            }
            else{
                setError(true)
                setSuccess(false)
                throw new Error("Something went wrong")
            }
            return response 
        } catch (error) {
            setError(true)
            if(axios.isAxiosError(error)){
                console.error(error.message)
                setErrorCode(error.response?.status)
            }
        }
    }

    const post = async(url: string, method: RequestInit, config: AxiosRequestConfig)
        : Promise<any> =>{
        const body = method.body
        try {
            const response = await axios.post<T>(url, body, config)
            if(response.status==200){
                setSuccess(true)
                setError(false)
            }
            else{
                setError(true)
                setSuccess(false)
                throw new Error("Something went wrong")
            }
            return response 
        } catch (error) {
            setError(true)
            if(axios.isAxiosError(error)){
                console.error(error.message)
                setErrorCode(error.response?.status)
                toast.error(error.message)
            }
        }
    }

    const get = async(url: string, method: AxiosRequestConfig)
        : Promise<any> =>{
        try {
            const response = await axios.get<T>(url, method )
            if(response.status==200){
                setSuccess(true)
                setError(false)
            }
            else{
                setError(true)
                setSuccess(false)
                throw new Error("Something went wrong")
            }
            return response
        } catch (error) {
            setError(true)
            if(axios.isAxiosError(error)){
                console.error(error.message)
                setErrorCode(error.response?.status)
                toast.error(error.message)
            }
        }
    }

    return {error, errorCode, success, put, post, get}
}