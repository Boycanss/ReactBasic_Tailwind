import React, { useEffect } from "react";
import { ThemeWrapper } from "../Component/ThemeWrapper";
import { useParams } from "react-router-dom";
import { apiUrlFindById } from "../Contants";

export const MoviePage = () =>{
    const param = useParams();

    useEffect(()=>{
        fetch(apiUrlFindById(param.id))
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((resData) => {
          console.log(resData);
        });
    })

    return(
        <ThemeWrapper>
            <h1>THIS IS MOVIE PAGE OF ID: {param.id}</h1>
        </ThemeWrapper>
    )
}