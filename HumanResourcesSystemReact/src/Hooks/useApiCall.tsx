import { useState } from "react"

export function  useApiCall<T>(url: string, method: RequestInit, initState: T){
        const[state, setState] = useState(initState) 
        async function apiCall()  :  Promise<T|never>{
            try {
                const response = await fetch(url, method)
                console.log(response)
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const result = await response.json() as T
                setState(result)
                
            } catch (error) {
                console.log(error)
            }

            return state
    }   
    
    return {apiCall} as const
}


