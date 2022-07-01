import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import React from "react";
const Page=(props :any)=>{
    return(
        <>

            {props?.children}

        </>
    )
}
export default Page