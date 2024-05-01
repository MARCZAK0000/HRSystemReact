import { useUser } from "../../Hooks/useUserContext";
import DashboardPage from "./DashboardPage";
import HomePage from "./HomePage";

const MainPage = ()=>{

    const user = useUser()
    return(
        user.user?.token === undefined?
        <HomePage/>:
        <DashboardPage/>
    )
};

export default MainPage