import React from 'react'
import "../../../App.css";
import Buy from '../../Buy/Buy';
import Contact from '../../Contact/Contact';
import Home from "../../Home/Home";
import What from "../../WhatItDoes/What"

function Dashboard() {
    return (
        <>
           <Home /> 
           <What />
           <Buy />
           <Contact />
        </>
    )
}

export default Dashboard
