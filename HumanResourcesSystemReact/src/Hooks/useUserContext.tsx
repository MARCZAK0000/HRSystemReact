import React, {useState, useContext} from 'react'



export type User = {
    email : string,
    username: string,
    token: string
}
type UserContextType = {
    user: User|null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}
type UserContextProviderPros = {
    children : React.ReactNode
}

const UserContext = React.createContext<UserContextType|null>(null)

export function useUser(){
    const userContext = useContext(UserContext)
    if(userContext ===null){
        throw new Error("Something went wrong")
    }
    return userContext
}

export const UserContextProvider = ({children} : UserContextProviderPros)=>{
    const [user, setUser] = useState<User| null>(null)

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}




