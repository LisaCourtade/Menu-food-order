import React from "react";
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <div className="navbar" >
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/order">Order</NavLink>
            <NavLink className="navlink" to="/register">Register</NavLink>
        </div>
    )
}