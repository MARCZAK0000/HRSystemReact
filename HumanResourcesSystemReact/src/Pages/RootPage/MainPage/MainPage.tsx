import { useUser } from "../../../Hooks/useUserContext";
import DashboardPage from "../DashboardPage/DashboardPage";
import HomePage from "../../HomePage/HomePage";

const MainPage = ()=>{

    const user = useUser()
    return(
        user.user?.token === undefined?
        <HomePage/>:
        <DashboardPage/>
    )
};

export default MainPage