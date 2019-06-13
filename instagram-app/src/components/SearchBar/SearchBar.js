import React from 'react';

function SearchBar() {
  // console.log(props);
  return (
    <div className="search-container">
      <header>
        <img src="#" />
        <input 
          type="text" 
          id="site-search"
          className="input"
          placeholder="Search" 
        />
        <img src="#" />
        <img src="#" />
        <img src="#" />
      </header>
    </div>
  );
}

export default SearchBar;