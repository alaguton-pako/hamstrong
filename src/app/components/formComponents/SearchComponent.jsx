import React, { useState } from "react";

const SearchInput = ({
  placeholder = "Search by Area, or Keywords",
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const newTerm = event.target.value;
    setSearchTerm(newTerm);
    onSearch(newTerm); // Trigger search immediately with each keystroke
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(searchTerm); // Ensure search term is submitted if Enter is pressed
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleChange} // Triggers on each keystroke
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;
