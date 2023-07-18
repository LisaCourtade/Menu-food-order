import React from "react";
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <>
        <h1>HOME</h1>
        <div className="main-page">
            <div className="menu-order">
                <div className="container basket">
                    <p>Click Menu to see the available meals and create meals or remove them. </p>
                    <br/>
                    <Link className="btn" to="/menu">Menu</Link>
                </div>
            </div>
            <div className="menu-order">
                <div className="container basket">
                    <p>Click Order to add meals to your basket and place an order.</p>
                    <br/>
                    <Link className="btn" to="/order">Order</Link>
                </div>
            </div>
        </div></> 
    )
}

