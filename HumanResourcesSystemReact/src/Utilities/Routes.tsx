import { Navigate, RouteObject } from "react-router";
import Layout from "../Pages/LayoutPage/LayoutPage";
import RegisterPage from "../Pages/LogPage/RegisterPage";
import LoginPage from "../Pages/LogPage/LoginPage";
import ConfirmEmailPage from "../Pages/ConfirmEmailPage/ConfirmEmailPage";
import MainPage from "../Pages/HomePage/MainPage";



export function PublicRoutes(): RouteObject[]{


    const decide: boolean = false;
    const routes : RouteObject[] = [{
        element: <Layout/>,
        children:[
            {path: "/", element: <MainPage/>},
            {path: "/register", element: <RegisterPage/>},
            {path: "/login", element: <LoginPage/>},
            {path: "*", element: <Navigate to="/" replace/>}
        ]
    }]

    const privateRoutes: RouteObject={
        children: [{path: "/account/confirm", element: <ConfirmEmailPage/> }]
    }
    if(decide){
        routes[0].children?.push(privateRoutes)
    }
    return routes
}


