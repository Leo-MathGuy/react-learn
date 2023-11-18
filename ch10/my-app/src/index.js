import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/Main"
import "./style.css";

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
};

ReactDOM.render(<Page />, document.getElementById("root"));