import VeryTop from './JumboBanner/VeryTop';
import Second from './Video/Second'
import Third from './ProjectsEdu/Third';
import Fourth from './Languages/Fourth';
import Contact from './ContactMe/ContactMe';
import Footer from "./Footer/Footer";
import React from "react";

function Aggregate(){
    return(
        <>
            <div id={'top'}> <VeryTop /></div>
            <div id={'second'}> <Second /></div>
            <div id={'third'}> <Third/></div>
            <div id={'fourth'}> <Fourth/></div>
            <div id={'contact'}> <Contact/></div>
            <Footer/>
        </>
    )
}
export default Aggregate;
