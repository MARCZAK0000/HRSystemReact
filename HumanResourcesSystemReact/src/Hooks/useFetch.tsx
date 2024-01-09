import {useEffect, useReducer} from "react"


type FetchProps<T> = {
    data: T | null
    loading: boolean,
    error: never | null
}
type State<T> =
  | { data: null; isLoading: boolean; error: null }
  | { data: null; isLoading: boolean; error: never }
  | { data: T; isLoading: boolean; error: null };

type Action<T> =
  | { type: "loading"; error: undefined }
  | { type: "success"; data: T }
  | { type: "error"; error: never };


export function useFetch<T>(url : string, requestOptions: RequestInit): FetchProps<T>{
    const [state, dispatch] = useReducer(reducer, {
        data: null,
        isLoading: false,
        error: null,
      });
    
      function reducer(state: State<T>, action: Action<T>) {
        switch (action.type) {
          case "loading":
            return { ...state, isLoading: true };
          case "success":
            return { data: action.data, isLoading: false, error: null };
          case "error":
            return { data: null, isLoading: false, error: action.error };
          default:
            throw new Error("Unknown action type");
        }
    }

    useEffect(()=>{
        if(state.data === "null"){

          const sendRequest =async () => {
              dispatch({type : "loading", error: undefined})
              try {
                  const response = await fetch(url, requestOptions )
                  if(!response.ok){
                      throw new Error("Something goes wrong")
                  }
                  const result = await response.json()
                  dispatch({type: "success", data: result})
              } catch (error) {
                  dispatch({type: "error", error: error as never})
              }
              
          }
  
          sendRequest()
        }
    }, [url])

    const response : FetchProps<T>= {
        data: state.data,
        loading : state.isLoading,
        error :state.error
    }

    return response
} 