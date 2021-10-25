import "./App.css";
import React from 'react'
import UseStateHook from './components/UseStateHook'

function App() {
  return (
    <div className="App">
      <header>
        <h1>React hooks training </h1>
      </header>

      <main>
        <UseStateHook name= "saadoun"/>
      </main>
    </div>
  );
}

export default App;


