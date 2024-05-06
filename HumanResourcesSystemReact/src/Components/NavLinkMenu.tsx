import { Link } from "react-router-dom"

type NavLinkType = {
    children: React.ReactNode,
    to: string,
    isActive: boolean
}

const NavLinkMenu = ({children, to, isActive} : NavLinkType)=>{
    return(
        <>
            <Link className={`nav-link text-decoration-none text-dark ${isActive?'active':''}`} to={to}>
                {children}
            </Link>
        </>
    )
}

export default NavLinkMenu