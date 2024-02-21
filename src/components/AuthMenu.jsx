import { NavLink } from "react-router-dom"

export const AuthMenu = () => {
    return (
        <>
            <NavLink to='/register'>Registration</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </>
    )
}