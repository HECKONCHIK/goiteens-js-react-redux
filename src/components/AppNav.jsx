import { NavLink } from "react-router-dom";

export const AppNav = () => {
    return (
        <>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
        
                <li><NavLink to='/tasks'>Tasks</NavLink></li>
            </ul>
        </>
    )
}