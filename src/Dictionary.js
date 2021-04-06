import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    if (keyword) {
      alert(`Searching for ${keyword} definition...`);
    } else {
      alert(`Enter any word to submit the search.`);
    }
  }
  return (
    <div className="Dictionary">
      <form className="form-inline" onSubmit={search}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Enter a word..."
          autoFocus="on"
          onChange={handleKeywordChange}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
