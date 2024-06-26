import React from "react";
import {Link} from "react-router-dom"
import logo from "../assets/logo.svg"


function Navbar(){


    return(
        <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                <img src={logo} alt="" />
                </Link>
        </nav>
    )
}

export default Navbar;