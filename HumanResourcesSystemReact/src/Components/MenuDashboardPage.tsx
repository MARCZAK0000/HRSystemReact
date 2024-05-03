import React from "react"
import { Link } from "react-router-dom"

type MenuDashboardPageType = {
    children: React.ReactNode,
    isActive: boolean,
    to: string
}

const MenuLink = ({children, isActive,to} : MenuDashboardPageType)=>{
    return (<>
        <Link to={to} className={isActive? 'nav-link border active text-dark text-decoration-none' : 'nav-link border text-dark text-decoration-none '}>{children}</Link>
    </>)
}

export default MenuLink