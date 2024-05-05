import { Navigate, RouteObject } from "react-router";
import Layout from "../Pages/RootPage/LayoutPage/LayoutPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import MainPage from "../Pages/RootPage/MainPage/MainPage";
import WelcomeUserPage from "../Pages/Outlets/WelcomePage/WelcomePage";
import ArrivalsPage from "../Pages/Outlets/ArrivalsPage/ArrivalsPage";
import CreateAbsencePage from "../Pages/Outlets/AbsencePage/CreateAbsence/CreateAbsencePage";
import AbsenceInfoPage from "../Pages/Outlets/AbsencePage/AbsenceInfo/AbsenceInfoPage";
import AbsenceHomePage from "../Pages/Outlets/AbsencePage/AbsenceHomePage/AbsenceHomePage";
import AbsenceLayout from "../Pages/Outlets/AbsencePage/AbsenceLayoutPage/AbsenceLayout";
import ForgetPasswordPage from "../Pages/ForgetPassword/ForgetPasswordPage";






export function PublicRoutes(): RouteObject[]{

    const routes : RouteObject[] = [{
        element: <Layout/>,
        children:[
            {path: "/", element: <MainPage/>, children: [{
                    path: "/user/absence", element: <AbsenceLayout/>, children:[{
                            path:"/user/absence", element: <AbsenceHomePage/>
                        },
                        {
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
            {path: "/forget", element: <ForgetPasswordPage/>},
            {path: "*", element: <Navigate to="/" replace/>}
        ]
    }]
    return routes
}




