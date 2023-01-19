import React from "react";
import Navigation from "../components/navigation";
import DesktopNavigation from "../components/desktopnavbar";
import { Outlet } from "react-router-dom";

 const Standard = ()=>{
        return(
            <div>
                <DesktopNavigation />
                <Navigation />
                <Outlet/>
            </div>
        )
}

export default Standard

