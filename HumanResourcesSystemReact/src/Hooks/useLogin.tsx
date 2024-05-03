import { loginStateProps, loginUserResponseProps } from '../Utilities/Types';

export async function useLogin(state: loginStateProps) :Promise<loginUserResponseProps | undefined> {
    try{
        const response = await fetch("https://localhost:7068/api/account/signin", {
            method: "POST",
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state)
        } )
        if(!response.ok){
            throw new Error("Login Fetch has error")
        }
        const result = await response.json() as loginUserResponseProps;

        if(!result.result){
            throw new Error(result.message)
        }

        return result
    }
    catch(error){
        console.error(error);
    }
}