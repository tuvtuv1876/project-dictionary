import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Welcome to Tu Vy's Dictionary</header>
        <Dictionary />
        <footer className="App-footer mt-5">
          coded by{" "}
          <a href="https://github.com/tuvtuv1876/project-dictionary" alt="">
            tu vy ho
          </a>
        </footer>
      </div>
    </div>
  );
}
