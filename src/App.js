import React from 'react';
import logo from './logo.svg';
import './App.css';
import Prueba from './prueba'
import Lista from './lista'

function App() {
  

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Prueba/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Lista></Lista>
      </header>
    </div>
  );
}

export default App;
