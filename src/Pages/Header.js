import React from "react";
import "./Header.css"
import logo from"../assets/logo.png"
import { Button } from "@mui/material";
function Header(){
    return(
        <div className="header">
        <img className="header_logo" alt="" src={logo}/>
        <div className="header_center">
            <div className="center_button">Home</div>
            <div className="center_button">Movies</div>
            <div className="center_button">About</div>
            <div className="center_button">Contact</div>
            <div className="center_button">Login</div>
        </div>
        <div className="header_right">
            <div className="headerContainer">
                <Button className="header_button">Sign up</Button>
            </div>
        </div>
        </div>
    )
}

export default Header