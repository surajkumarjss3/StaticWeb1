import React from 'react';
import logo from './suraj.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello this is Suraj
        </p>
        <a
          className="App-link"
          href="https://www.researchgate.net/publication/367067007_A_Study_on_Emergent_Augmented_Intelligence_Applications_in_Structural_Engineering"
          target="_blank"
          rel="noopener noreferrer"
        >
          Checkout my Research paper
        </a>
      </header>
    </div>
  );
}

export default App;
