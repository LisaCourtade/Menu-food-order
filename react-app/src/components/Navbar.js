import React from "react";
import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar" >
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/menu">Menu</NavLink>
            <NavLink className="navlink" to="/order">Order</NavLink> 
        </div>
    )
}