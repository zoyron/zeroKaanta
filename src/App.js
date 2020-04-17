import React from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './components/Icon';

function App() {
  return (
    <div className="App">
      <Icon name="circle" />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
