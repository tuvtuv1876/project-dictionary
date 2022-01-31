import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  const [key, setKey] = useState("rainbow");
  const [searchResults, setSearchResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setSearchResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${key}`;
    axios.get(apiUrl).then(handleResponse);

    //documentation: https://www.pexels.com/api/documentation/
    let pexelsApiKey =
      "563492ad6f91700001000001ceb668a554ca414db2eef1f3e148c165";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${key}}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeKey(event) {
    setKey(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <main className="Dictionary">
        <section>
          <h4 className="mb-4 mt-2">What word are you looking for?</h4>
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
          <h5 className="mt-2">word examples: unicorn, wine, yoga...</h5>
        </section>
        <Results className="Results" results={searchResults} />
        <Photos photos={photos} />
      </main>
    );
  } else {
    load();
    return "Loading..";
  }
}
