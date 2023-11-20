import React from "react";

export default function Header() {
    return (
        <div className="header">
            <h1>Soham Bajaj</h1>
            <p className="position">CEO and Founder of Aviquo</p>
            <p className="website"><a href="https://aviquo.com" target="_blank" rel="noreferrer">aviquo.com</a></p>
            <div className="email-wrap">
                <a className="email" href="mailto:bajajs@htps.us" target="_blank" rel="noreferrer">
                    <i class="fa-solid fa-envelope"></i> Email
                </a>
            </div>
        </div>
    );
}