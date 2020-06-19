import React from 'react';

const Search = (props) => {
  return (
    <div>
      <form>
        <input type="text" name="search" placeholder="Search..."></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
