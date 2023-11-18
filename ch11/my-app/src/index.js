import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import MainContent from "./components/Main"
import "./style.css";

function Page() {
    return (
        <>
            <Header />
            <MainContent />
        </>
    );
};

ReactDOM.render(<Page />, document.getElementById("root"));