import React from "react";

// This component renders a search bar for filtering plants by name
function Search({ search, setSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
