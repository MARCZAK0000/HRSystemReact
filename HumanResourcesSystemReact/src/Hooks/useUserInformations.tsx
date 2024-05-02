import React, { useContext, useState } from "react"

type UserInformationsType = {
    name: string,
    lastName: string,
    userCode: string,
    email: string, 
    phone: string,
    departmentName: string
}

type UserInformationsContext = {
    userInfo : UserInformationsType|null,
    setUserInfo : React.Dispatch<React.SetStateAction<UserInformationsType | null>>
}
type UserInformationsContextProps = {
    children: React.ReactNode
}



const UserInfoContext = React.createContext<UserInformationsContext|null>(null)

export function useUserInformations(){
    const context = useContext(UserInfoContext)
    if(context ===null){
        throw new Error("Something went wrong")
    }
    return context
}

export const UserInfoContextProvider = ({children} : UserInformationsContextProps)=>{
    const [userInfo, setUserInfo] = useState<UserInformationsType | null>(null)

    return(
        <UserInfoContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserInfoContext.Provider>
    )
}