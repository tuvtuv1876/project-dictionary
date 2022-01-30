import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [key, setKey] = useState([]);
  const [searchResults, setSearchResults] = useState(null);

  function handleResponse(response) {
    setSearchResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${key}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function changeKey(event) {
    setKey(event.target.value);
  }
  return (
    <main className="Dictionary">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              onChange={changeKey}
              className="form-control w-100"
            />
          </div>
          <div className="col-3">
            <input type="submit" className="btn w-100" value="Search" />
          </div>
        </div>
      </form>
      <Results className="Results" results={searchResults} />
    </main>
  );
}
