import React, { ReactNode } from "react"

type colorType = "blue"|"green"|"red"

type buttonPropsType = {
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    color: colorType
    children: ReactNode
}


export const Button = ({handleClick, color, children}: buttonPropsType)=>{

    const buttonColor = (color: string): string=>{
        switch(color){
            case "blue":
                return "btn btn-primary"
            case "green":
                return "btn btn-success"
            case "red":
                return "btn btn-danger"
            default:
                return "btn btn-primary"
        }
    }


    const className: string = buttonColor(color)

    return(
        <button className= {className + " w-50"} onClick={handleClick}>
            {children}
        </button>
    )
}