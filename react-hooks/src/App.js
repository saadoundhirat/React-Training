import "./App.css";
import React from 'react'
import UseStateHook from './components/useState/UseStateHook'
import UseStateWithObj from "./components/useState/UseStateWithObj";
function App() {
  return (
    <div className="App">
      <header>
        <h1>React hooks training </h1>
      </header>

      <main>
        {/* <UseStateHook name= "saadoun"/> */}
        <UseStateWithObj />
      </main>
    </div>
  );
}

export default App;


