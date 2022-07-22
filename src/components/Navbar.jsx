import React from "react";
import logo from ".././assets/react.svg"

function Navbar() {
    return (
        <nav>
            <img src={logo} alt="react-logo" className="nav-logo"/>
            <h3 className="nav-logo-text">Shams - React</h3>
            <h4 className="nav-title">First React Website</h4>
        </nav>
    )
};

export default Navbar;