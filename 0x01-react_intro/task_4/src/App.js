import React from "react";
import "./App.css";
import holbertonLogo from "./holberton_logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>Copyright 2023 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;