import { Navigate, RouteObject } from "react-router";
import Layout from "../Pages/LayoutPage/LayoutPage";
import RegisterPage from "../Pages/LogPage/RegisterPage";
import LoginPage from "../Pages/LogPage/LoginPage";
import MainPage from "../Pages/HomePage/MainPage";
import AbsencePage from "../Pages/LoggedPages/AbsencePage/CreateAbsence";
import WelcomeUserPage from "../Pages/HomePage/WelcomePage";
import ArrivalsPage from "../Pages/LoggedPages/ArrivalsPage/ArrivalsPage";
import CreateAbsencePage from "../Pages/LoggedPages/AbsencePage/CreateAbsence/CreateAbsencePage";





export function PublicRoutes(): RouteObject[]{

    const routes : RouteObject[] = [{
        element: <Layout/>,
        children:[
            {path: "/", element: <MainPage/>, children: [{
                    path: "/user/absence", element: <AbsencePage/>, children:[{
                            path: "/user/absence/create", element: <CreateAbsencePage/>
                        },{
                            path: "/user/absence/info", element: <AbsenceInfoPage/>
                        }] 
                    
                },{
                    path: "/user/arrivals", element: <ArrivalsPage/>
                }
                ,{
                    path:"/", element: <WelcomeUserPage/>, 
                }] },
            {path: "/register", element: <RegisterPage/>},
            {path: "/login", element: <LoginPage/>},
            {path: "*", element: <Navigate to="/" replace/>}
        ]
    }]
    return routes
}




