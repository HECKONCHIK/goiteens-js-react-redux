import { Layout } from "components/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Registration, Tasks } from "pages";
import { App } from "components/App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/tasks",
                element: <Tasks/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Registration/>
            }
        ]
    }
])