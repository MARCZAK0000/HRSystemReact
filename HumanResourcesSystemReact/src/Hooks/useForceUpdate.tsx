import { useState } from "react"


export const useForceUpdate = ()  =>{
    const [,setToggle] = useState<boolean>(false)
    return ()=> setToggle(toggle=>!toggle)
}

