import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld name="Fernando"/>
      </header>
    </div>
  );
}

export default App;
