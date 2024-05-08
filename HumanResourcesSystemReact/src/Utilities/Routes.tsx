import { Navigate, RouteObject } from "react-router";
import Layout from "../Pages/RootPage/LayoutPage/LayoutPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import MainPage from "../Pages/RootPage/MainPage/MainPage";
import WelcomeUserPage from "../Pages/Outlets/WelcomePage/WelcomePage";
import CreateAbsencePage from "../Pages/Outlets/AbsencePage/CreateAbsence/CreateAbsencePage";
import AbsenceInfoPage from "../Pages/Outlets/AbsencePage/AbsenceInfo/AbsenceInfoPage";
import CreateAttendancePage from "../Pages/Outlets/AbsencePage/HomePage/AbsenceHomePage";
import AbsenceLayout from "../Pages/Outlets/AbsencePage/LayoutPage/AbsenceLayout";
import ForgetPasswordPage from "../Pages/ForgetPassword/ForgetPasswordPage";
import AttendanceLayout from "../Pages/Outlets/AttendancePage/LayoutPage/AttendanceLayout";
import AttendanceHomePage from "../Pages/Outlets/AttendancePage/HomePage.tsx/AttendanceHomePage";
import AttendanceCreatePage from "../Pages/Outlets/AttendancePage/CreatePage/AttendanceCreatePage";
import AttendanceDeparturePage from "../Pages/Outlets/AttendancePage/DeparturePage/AttendanceDeparturePage";
import AttendanceInfoPage from "../Pages/Outlets/AttendancePage/InfoPage/AttendanceInfoPage";
import RecoveryPasswordPage from "../Pages/ForgetPassword/RecoveryPassword/RecoveryPasswordPage";
import ForgetPasswordLayout from "../Pages/ForgetPassword/ForgetPasswordLayout/ForgetPasswrodLayout";







export function PublicRoutes(): RouteObject[]{

    const routes : RouteObject[] = [{
        element: <Layout/>,
        children:[
            {path: "/", element: <MainPage/>, children: [{
                    path: "/user/absence", element: <AbsenceLayout/>, children:[{
                            path:"/user/absence", element: <CreateAttendancePage/>
                        },
                        {
                            path: "/user/absence/create", element: <CreateAbsencePage/>
                        },{
                            path: "/user/absence/info", element: <AbsenceInfoPage/>
                        }] 
                    
                },{
                    path: "/user/attendance", element: <AttendanceLayout/>, children:[{
                            path:"/user/attendance", element: <AttendanceHomePage/>
                        },{
                            path:"/user/attendance/create", element: <AttendanceCreatePage/>  
                        },{
                            path:"/user/attendance/close", element: <AttendanceDeparturePage/>
                        },{
                            path:"/user/attendance/info", element: <AttendanceInfoPage/>
                        }]
                }
                ,{
                    path:"/", element: <WelcomeUserPage/>, 
                }] },
            {path: "/register", element: <RegisterPage/>},
            {path: "/login", element: <LoginPage/>},
            {path: "/forget", element: <ForgetPasswordLayout/>, children:[{
                    path:"/forget", element: <ForgetPasswordPage/>
                },{
                    path: "/forget/token", element: <RecoveryPasswordPage/>
                }]},
            {path: "*", element: <Navigate to="/" replace/>}
        ]
    }]
    return routes
}




