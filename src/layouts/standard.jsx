import React from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import DesktopNavigation from "../components/desktopnavbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

 const Standard = ()=>{

    useEffect(()=>{
        window.scrollTo(0,0)
    })

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

