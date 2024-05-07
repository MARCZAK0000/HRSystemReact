import { RouterProvider } from "react-router"
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./Utilities/Routes";
import { UserContextProvider } from "./Hooks/useUserContext";
import { UserInfoContextProvider } from "./Hooks/useUserInformations";
import { useEffect } from "react";
import { useRefreshToken } from "./Hooks/useRefreshToken";





export default function App() {
  const routerList = PublicRoutes()
  const router = createBrowserRouter(routerList)

    return(
      <UserContextProvider>
        <UserInfoContextProvider>
          <RouterProvider router={router}/>
        </UserInfoContextProvider>
      </UserContextProvider>
    )
}



