import React, { useEffect, useState } from "react";
import { NavChild } from "./NavChild";
import { useData } from "../Utils/DataUseContext";
import { ButtonMode } from "../Button/ButtonMode";
import { ThemeWrapper } from "../ThemeWrapper";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
  const [dataCount, setDataCount] = useState()
  const {data, updateData} = useData();

  useEffect(()=>{
    setTimeout(() => {
      setDataCount(data);
    }, 2000);
  }, [data])

  return (
    <ThemeWrapper>
      <div className="h-[50] justify-between flex">
        <div className="navChild">
          <NavChild isLogo/>
        </div>

        <div className="navChild" 
        style={{
          display:"flex", gap:"40px", justifyContent:"center", alignItems:"center", color:"wheat"
        }}>
          <NavChild contentName={`Bookmarked Count: ${dataCount}`}/>
          <NavChild contentName="ABOUT"/>
          <NavChild contentName="HISTORY"/>
          <ButtonMode/>
        </div>
      </div>
      <Outlet/>
    </ThemeWrapper>
  );
};
