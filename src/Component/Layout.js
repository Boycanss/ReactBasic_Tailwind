import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = (props) =>{
    return(
        <div>
            <Navbar/>
                <Outlet/>
            <Footer/>
        </div>
    )
}