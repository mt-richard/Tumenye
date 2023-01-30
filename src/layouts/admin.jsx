import React from "react";
import Navigation from "../components/navigation";
import DesktopNavigation from "../components/desktopnavbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

 const Admin = ()=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    })

        return(
            <div>
                <DesktopNavigation />
                <Navigation />
                <Outlet/>
                
            </div>
        )
}
export default Admin