import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(login({
            email: form.elements.email.value,
            passwword: form.elements.password.value
        }))
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email
                <input type="email" name="email"/>
            </label>
            <label>
                Password
                <input type="password" name="password"/>
            </label>

            <button type="submit">Submit</button>
        </form>
    )
}