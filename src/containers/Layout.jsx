import React from "react";
import { NavBar } from "../components/NavBar";

function Layout({children}){
    return(
        <>
            <NavBar />
            {children}
        </>
    )
}

export { Layout };