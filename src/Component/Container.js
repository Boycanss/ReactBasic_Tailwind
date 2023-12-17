import React, { useEffect, useState } from "react";
import { ThemeWrapper } from "./ThemeWrapper";
import { Card } from "./Card/Card";
import { apiKey, apiUrl } from "../Contants";

export const Container = () =>{
    const [movieData, setMovieData] = useState();

    const getMovieList = () =>{
        fetch(`${apiUrl}?api_key=${apiKey}`)
        .then((res)=>{
            if(res.ok){
                return res.json();
            }
        })
        .then((resData)=>{
            console.log(resData.results);
            setMovieData(resData.results);
        })
    }

    useEffect(()=>{
        getMovieList();
    }, [])

    return(
        <ThemeWrapper>
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
                {
                    movieData &&
                    movieData.map((dt)=>{
                        return(
                            <Card key={dt.id} title={dt.title} background={dt.poster_path} id={dt.id}/>
                        )
                    })
                }
            </div>
        </ThemeWrapper>
    )
}