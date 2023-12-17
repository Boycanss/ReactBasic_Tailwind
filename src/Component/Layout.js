import React from "react";
import { Navbar } from "./Navbar/Navbar";

export const Layout = (props) =>{
    return(
        <div>
            <Navbar/>
                {props.children}
            <Footer/>
        </div>
    )
}