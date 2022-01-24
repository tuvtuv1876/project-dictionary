import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Welcome to Tu Vy's Dictionary</header>
        <Dictionary />
        <footer className="App-footer mt-5">coded by tu vy ho</footer>
      </div>
    </div>
  );
}
