import React from 'react';

function SearchBar() {
  return (
    <div className="search-container">
      <header>
        <h3>Instagram Logo</h3>
        <input 
          type="text" 
          id="site-search"
          className="input"
          placeholder="Search" 
        />
        <h3>Compass</h3>
        <h3>Like</h3>
        <h3>Profile</h3>
      </header>
    </div>
  );
}

export default SearchBar;