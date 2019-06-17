import React from 'react';
import IGbar from '../../assets/ig_search_bar.png';


const SearchBar = () => {
  return (
    <div className="search-container">
      <header>
        <img alt="instagram logo" src={IGbar} className="logo-image" />
      </header>
    </div>
  );
}

export default SearchBar;