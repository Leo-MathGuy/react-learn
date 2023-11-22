import React from "react";

export default function Joke({setup, punch}) {
    return (
        <div className="flex flex-col justify-between w-full px-8 py-12 rounded-lg shadow-md bg-zinc-600 shadow-neutral-900">
            <p className="text-lg text-gray-300">{ setup }</p>
            <p className="text-xl font-medium text-gray-200">{ punch }</p>
        </div>
    );
}