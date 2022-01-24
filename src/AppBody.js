import React, { useState } from "react";
import axios from "axios";

export default function AppBody() {
  const [key, setKey] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[1]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`loading ${key}..`);

    //documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${key}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function changeKey(event) {
    setKey(event.target.value);
  }
  return (
    <main className="AppBody">
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
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="Search"
            />
          </div>
        </div>
      </form>
    </main>
  );
}
