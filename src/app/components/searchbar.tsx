"use client"
import { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e:any) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Handle the search action (e.g., console.log, redirect, etc.)
    console.log('Searching for:', query);
  };

  return ( 
    <div className="flex items-center justify-center mt-[4rem] rounded-full  p-2">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="w-72 p-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Search..."
      />
      <button 
        onClick={handleSearch} 
        className="bg-black text-white px-4 py-2 rounded-r-full hover:bg-gray-600 focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
