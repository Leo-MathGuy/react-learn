import React from "react";
import reactLogo from "../images/react.png";

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={reactLogo} alt="React Logo" />
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </nav>
        </header>
    );
}