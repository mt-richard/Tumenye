import React from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import DesktopNavigation from "../components/desktopnavbar";
import { Outlet } from "react-router-dom";

 const Standard = ()=>{
        return(
            <div>
                <DesktopNavigation />
                <Navigation />
                <Outlet/>
                <Footer />
            </div>
        )
}

export default Standard

