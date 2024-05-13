import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";

type AxiosRequest<T> = {
    error: boolean, 
    errorCode: number|undefined,
    success: boolean
    put: (url: string, method: RequestInit, config: AxiosRequestConfig)=>Promise<T|undefined>
    post:(url: string, method: RequestInit, config: AxiosRequestConfig) =>Promise<T|undefined>
    get:(url: string, method:RequestInit)=>Promise<T|undefined>
}


export function useAxiosRequest<T>(): AxiosRequest<T>{
    const [error, setError] = useState<boolean>(false)
    const [errorCode, setErrorCode] = useState<number|undefined>(0)
    const [success, setSuccess] = useState<boolean>(false)

    const put = async(url: string, method: RequestInit, config: AxiosRequestConfig): Promise<T|undefined> =>{
        const body = method.body
        try {
            const response = await axios.put(url, body ,config)
            if(response.status==200){
                setSuccess(true)
                setError(false)
            }
            else{
                setError(true)
                setSuccess(false)
                throw new Error("Something went wrong")
            }
            return response as T
        } catch (error) {
            setError(true)
            if(axios.isAxiosError(error)){
                console.error(error.message)
                setErrorCode(error.response?.status)
            }
        }
    }

    const post = async(url: string, method: RequestInit, config: AxiosRequestConfig): Promise<T|undefined> =>{
        const body = method.body
        try {
            const response = await axios.post(url, body, config)
            if(response.status==200){
                setSuccess(true)
                setError(false)
            }
            else{
                setError(true)
                setSuccess(false)
                throw new Error("Something went wrong")
            }
            return response as T
        } catch (error) {
            setError(true)
            if(axios.isAxiosError(error)){
                console.error(error.message)
                setErrorCode(error.response?.status)
            }
        }
    }

    const get = async(url: string, method: RequestInit): Promise<T|undefined> =>{
        const config: any = method.headers
        try {
            const response = await axios.get(url, config )
            if(response.status==200){
                setSuccess(true)
                setError(false)
            }
            else{
                setError(true)
                setSuccess(false)
                throw new Error("Something went wrong")
            }
            return response as T
        } catch (error) {
            setError(true)
            if(axios.isAxiosError(error)){
                console.error(error.message)
                setErrorCode(error.response?.status)
            }
        }
    }

    return {error, errorCode, success, put, post, get}
}