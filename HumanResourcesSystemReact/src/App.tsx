import { RouterProvider } from "react-router"
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./Utilities/Routes";
import { UserContextProvider } from "./Hooks/useUserContext";





export default function App() {
  const routerList = PublicRoutes()
  const router = createBrowserRouter(routerList)

    return(
      <UserContextProvider>
        <RouterProvider router={router}/>
      </UserContextProvider>
    )
}



