import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Welcome to Tu Vy's Dictionary</h1>
        </header>
        <Dictionary />
        <footer className="App-footer mt-4">
          open-source coded by{" "}
          <a
            href="https://github.com/tuvtuv1876/project-dictionary"
            alt="Tu Vy's Github"
            title="Tu Vy's Github"
          >
            tu vy ho
          </a>
          , hosted on{" "}
          <a
            href="https://app.netlify.com/sites/reverent-joliot-849a7b/overview"
            alt="Project on Netlify"
            title="Project on Netlify"
          >
            netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
