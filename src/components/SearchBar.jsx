import { useState } from "react";

export const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <form onSubmit={onSubmit} className="flex w-full md:w-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search blogs..."
        className="w-full p-2 rounded-l bg-black-bg text-white border border-gray-700 focus:outline-none"
      />
      <button
        type="submit"
        className="p-2 bg-orange-btn text-white rounded-r hover:bg-gray-hovered"
      >
        Search
      </button>
    </form>
  );
};