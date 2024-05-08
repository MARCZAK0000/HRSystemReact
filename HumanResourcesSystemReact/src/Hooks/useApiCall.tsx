import { useState } from "react"

export type ApiCallResponse<T> = {
    data:T,
    error:boolean,
    fetchFunc: (method: RequestInit) => Promise<void>
}

export function useApiCall<T>(url: string):ApiCallResponse<T>{ 
    const [data,setData]=useState<T>({} as T)
    const [error, setError]=useState<boolean>(false)

    const fetchFunc = async (method: RequestInit):Promise<void> =>{
        console.log("Im in fetch function")
        try {
            const response = await fetch(url, method)
            if(!response.ok){
                throw new Error("Fetch request: has error")
            }
            const result :T = await response.json() 
            setData(result)
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }
    
    return {data , error, fetchFunc}
}        


