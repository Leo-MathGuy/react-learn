import React from "react";
import Header from "./Header";
import Joke from "./Joke";
import laugh from "./laugh.mp3";
import jokes from "./jokes.json";

export default function App() {
    const jokeEls = jokes.map(joke => {
        return <Joke {...joke} /> 
    })
    return (
        <div class="bg-zinc-800 min-h-screen" onClick={() => { document.getElementById('laugh').play() }}>
            <audio src={laugh} className="hidden" id="laugh" loop></audio>
            <Header />
            <div className="grid grid-cols-1 gap-8 pl-8 pr-8 mx-auto md:gap-12 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 auto-rows-auto">
                {jokeEls}
            </div>
        </div>
    );
}