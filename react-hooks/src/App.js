import "./App.css";
import React from 'react'
import UseStateHook from './components/useState/UseStateHook'
import UseStateWithObj from "./components/useState/UseStateWithObj";
import UseEffectBasic from './components/useEffect/UseEffectBasic'
import UseEffectFitchData from "./components/useEffect/UseEffectFitchData"
function App() {
  return (
    <div className="App">
      <header>
        <h1>React hooks training </h1>
      </header>

      <main>

        {/* ================= useState Comp =================*/}
        {/* <UseStateHook name= "saadoun"/> */}
        {/* <UseStateWithObj /> */}



        {/* ================= useEffect Comp =================*/}
        {/* <UseEffectBasic/> */}
        <UseEffectFitchData/>
      </main>
    </div>
  );
}

export default App;


