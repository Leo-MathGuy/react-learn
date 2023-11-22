import React from "react";
import Header from "./Header";
import data from "../data/data.json";
import Loc from "./Location";

export default function App() {
    const locEls = data.map(loc => {
        return <Loc {...loc} />
    });

    return (
        <div>
            <Header />
            <div className="flex flex-col display: gap-y-12">
                { locEls }
            </div>
        </div>
    );
}