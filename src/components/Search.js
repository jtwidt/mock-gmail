import React from 'react';

const Search = (props) => {
  return (
    <div className="search-bar">
      <form>
        <input type="text" name="search" placeholder="Search..."></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
