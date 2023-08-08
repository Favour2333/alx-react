import React from 'react';
import './App.css';
import HolbertonLogo from './holberton-logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={HolbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>Copyright 2023 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;

