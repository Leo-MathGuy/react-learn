import React from "react";
import Pic from "./Pic";
import Header from "./Header";
import Bio from "./Bio";
import Footer from "./Footer";
import "./profile.css";

export default function Profile() {
    return (
        <div className="card-wrap">
            <main className="card">
                <Pic />
                <div className="card-pad">
                    <Header />
                    <Bio />
                </div>
                <Footer />
            </main>
        </div>
    );
}