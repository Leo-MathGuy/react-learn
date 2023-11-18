import React from "react";

export default function Header() {
    return (
        <header className="header head-flex">
            <div className="logo-wrap head-flex">
                <img src={require("../images/react.png")} alt="React Logo" className="logo" />
                <span className="logo-text">ReactFacts</span>
            </div>
            <span className="projname">React Couse - Project 1</span>
        </header>
    );
}