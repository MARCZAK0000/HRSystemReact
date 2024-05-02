import { Navigate, RouteObject } from "react-router";
import Layout from "../Pages/RootPage/LayoutPage/LayoutPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import MainPage from "../Pages/RootPage/MainPage/MainPage";
import WelcomeUserPage from "../Pages/Outlets/WelcomePage/WelcomePage";
import ArrivalsPage from "../Pages/Outlets/ArrivalsPage/ArrivalsPage";
import AbsencePage from "../Pages/Outlets/AbsencePage/AbsenceMainPage/AbsencePage";
import CreateAbsencePage from "../Pages/Outlets/AbsencePage/CreateAbsence/CreateAbsencePage";
import AbsenceInfoPage from "../Pages/Outlets/AbsencePage/AbsenceInfo/AbsenceInfoPage";





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




