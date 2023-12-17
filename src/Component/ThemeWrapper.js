import React from "react";

export const ThemeWrapper = (props) =>{
    return(
        <div className="bg-slate-300 dark:bg-slate-800 text-black dark:text-gray-100">
            {props.children}
        </div>
    )
}