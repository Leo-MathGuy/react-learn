import React from 'react';

export default function Header() {
  return (
    <header className="p-6 mb-16 shadow-lg shadow-zinc-900 bg-zinc-700 md:p-10">
      <h1 className="text-2xl font-semibold text-gray-100 md:text-4xl">Jokes <span className='text-sm font-thin text-red-50'>dont click</span></h1>
    </header>
  );
};