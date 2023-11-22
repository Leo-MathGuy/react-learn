import React from "react";
import Header from "./Header";
import Joke from "./Joke";
import laugh from "./laugh.mp3";

export default function App() {
    return (
        <div class="bg-zinc-800 min-h-screen" onClick={() => {document.getElementById('laugh').play()}}>
            <audio src={laugh} className="hidden" id="laugh" loop></audio>
            <Header />
            <div className="grid grid-cols-1 gap-8 pl-8 pr-8 mx-auto md:gap-12 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 auto-rows-auto">
                <Joke
                    setup="Why do JavaScript developers prefer dark mode?"
                    punch="Because light attracts bugs!"
                />
                <Joke
                    setup="How did the function express its feelings?"
                    punch="It returned them!"
                />
                <Joke
                    setup="What do you call a developer who doesn't use Git?"
                    punch="A careless committer!"
                />
                <Joke
                    punch="A JavaScript developer was sad because he didn't 'null' his emotions."
                />
                <Joke
                    setup="How do you comfort a JavaScript bug?"
                    punch="You console it!"
                />
                <Joke
                    setup="Why do programmers prefer dark chocolate?"
                    punch="It has a higher byte count!"
                />
                <Joke
                    setup="What's a developer's favorite horror movie?"
                    punch="The Boolean Chainsaw Massacre!"
                />
                <Joke
                    setup="Why do JavaScript developers always mix up Christmas and Halloween?"
                    punch="Because Oct 31 === Dec 25!"
                />
            </div>
        </div>
    );
}