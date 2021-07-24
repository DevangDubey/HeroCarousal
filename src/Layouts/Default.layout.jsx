import React from "react";

import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";

import Navbar from "../components/Navbar/Navbar.component";


const DefaultLayout = (props) => {
    return(
        <>
        <Navbar />
        <HeroCarousal />
        {props.children}
        </>
    );
};

export default DefaultLayout;