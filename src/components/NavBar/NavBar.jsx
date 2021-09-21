import React from "react";
import "./NavBar.css"
import { NavLink } from "react-router-dom";

export default function NavBar () {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to="/" exact className="navbar-brand">Home</NavLink>
            </div>
        </nav>
    )
}
