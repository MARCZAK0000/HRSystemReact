import { useState } from "react"

export type ApiCallResponse<T> = {
    data:T,
    error:boolean,
    success: boolean
    fetchFunc: (method: RequestInit) => Promise<void>
}

export function useApiCall<T>(url: string):ApiCallResponse<T>{ 
    const [data,setData]=useState<T>({} as T)
    const [error, setError]=useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const fetchFunc = async (method: RequestInit):Promise<void> =>{
        console.log("Im in fetch function")
        try {
            const response = await fetch(url, method)
            if(!response.ok){
                throw new Error(response.status.toString())
            }
            const result :T = await response.json() 
            setData(result)
            if(result != undefined || result!=null){
                setSuccess(true)
                setError(false)
            }
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }
    
    return {data , error, fetchFunc, success}
}        


