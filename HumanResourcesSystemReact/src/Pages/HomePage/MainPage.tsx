import { useUser } from "../../Hooks/useUserContext";
import DashboardPage from "./DashboardPage";

const HomePage = ()=>{

    const user = useUser()
    return(
        user.user?.token === undefined?
        <HomePage/>:
        <DashboardPage/>
    )
};

export default HomePage