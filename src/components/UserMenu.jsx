import { useDispatch, useSelector } from "react-redux"
import { selectUserName } from "../redux/auth/selector"
import { logout } from "../redux/auth/operations";

export const UserMenu = () => {
    const UserName = useSelector(selectUserName);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logout())
    }

    return (
        <>
            <h1>Hello, {UserMenu}!</h1>
            
            <button onClick={handleLogOut} type='button'>Log out</button>
        </>
    )
}