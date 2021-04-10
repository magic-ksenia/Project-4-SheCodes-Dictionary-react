import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  // API documentation https://dictionaryapi.dev/
  function search(event) {
    event.preventDefault();
    if (keyword) {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
      axios.get(apiUrl).then(handleResponse);
    } else {
      alert(`Enter any word to submit the search.`);
    }
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  //  https://api.dictionaryapi.dev/api/v2/entries/<language_code>/<word>
  return (
    <div className="Dictionary">
      <section>
        <h3>What word do you want to look up?</h3>
        <form onSubmit={search}>
          <input
            className="form-control"
            type="search"
            placeholder="Enter a word..."
            autoComplete="off"
            autoFocus="on"
            onChange={handleKeywordChange}
          />
        </form>
        <div className="Hint">
          i.g. music, science, travel, establish ,harmony...
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}
