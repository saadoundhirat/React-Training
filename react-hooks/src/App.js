import "./App.css";
import React from "react";
import UseStateHook from "./components/useState/UseStateHook";
import UseStateWithObj from "./components/useState/UseStateWithObj";
import UseEffectBasic from "./components/useEffect/UseEffectBasic";
import UseEffectFitchData from "./components/useEffect/UseEffectFitchData";

/* to use useContext in react context  */
// import ContextA from "./components/useContext/ContextA";
// export const userContext = React.createContext();

/* useReducer hook  */
import UseReducer from './components/useReducer/UseReducer'


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
        {/* <UseEffectFitchData/> */}

        {/* ================= useContext Comp =================*/}
        {/* <userContext.provider value={"saadoun"}>
          <ContextA />
        </userContext.provider> */}
        
        {/* ================= useReducer Comp =================*/}
        <UseReducer />

      </main>
    </div>
  );
}

export default App;