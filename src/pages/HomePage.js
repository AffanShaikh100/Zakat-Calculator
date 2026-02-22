import React from "react";
import Header from "../components/Header";
import "./mediaQueries.css";
import "./index.css";
import FormInputs from "../components/Form";
import Footer from "../components/Footer";

export default function HomePage (){
    return(
        <div>
            <Header/>
            <FormInputs/>
            <Footer/>
        </div>
    )
}