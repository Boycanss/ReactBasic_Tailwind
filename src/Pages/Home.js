import React from "react";
import { ThemeWrapper } from "../Component/ThemeWrapper";
import { Container } from "../Component/Container";
import FormCard from "../Component/Form/FormCard";

export const Home = () =>{
    return(
        <ThemeWrapper>
            <h1>THIS IS HOME PAGE</h1>
            <Container />
            <FormCard />
        </ThemeWrapper>
    )
}