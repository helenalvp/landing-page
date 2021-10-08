import React from "react";
import "./search-bar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div class="search-bar search-bar--regular mb-3 mx-5 px-5">
        <input
          type="text"
          class="search-bar__input search-bar__input--regular p-3"
          placeholder="What are you looking for?"
        />
        {/* search icon */}
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          class="search-bar__search-icon"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
        </svg>
      </div>
    );
  }
}

export default SearchBar;
