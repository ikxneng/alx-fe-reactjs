
import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <header style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        padding: "20px 10%",
        background: 'seagreen', 
        display: 'flex',
        justifyContent: "space-between", 
        alignItems: 'center',
        zIndex: '100'}}>

        <nav >

        <div style={{
        position: "relative",
        fontSize: "18px",
        fontWeight: "500",
        display: "flex",
        gap: "15px"}}>

        <Link style={{color: 'black', cursor: 'pointer'}} to='/'> Home </Link>
        <Link style={{color: 'black', cursor: 'pointer'}} to='/about'>About</Link>
        <Link style={{color: 'black', cursor: 'pointer'}} to='/services'>Services</Link>
        <Link style={{color: 'black', cursor: 'pointer'}} to='/contact'>Contact</Link> 

        </div>
        </nav>
        </header>
    )
}