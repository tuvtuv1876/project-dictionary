import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Welcome to Tu Vy's Dictionary</h1>
          <h4 className="mt-4">What word are you looking for?</h4>
        </header>
        <Dictionary />
        <footer className="App-footer mt-4">
          coded by{" "}
          <a href="https://github.com/tuvtuv1876/project-dictionary" alt="">
            tu vy ho
          </a>
        </footer>
      </div>
    </div>
  );
}
