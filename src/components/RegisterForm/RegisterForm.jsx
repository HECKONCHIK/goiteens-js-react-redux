import { useDispatch } from "react-redux";

export const RegisterForm = () => {
    // const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(register({
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
        }))
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type="text" name="name"/>
            </label>
            <label>
                Email
                <input type="email" name="email"/>
            </label>
            <label>
                Password
                <input type="password" name="password"/>
            </label>
        </form>
    )
}