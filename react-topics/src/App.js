import "./App.css";
import React from "react";
import Welcome from "./components/class-components/Welcome";
import BindingHandlers from "./components/class-components/BindingHandlers";
import ConditionalRendering from "./components/class-components/ConditionalRendering";
import ListRendering from "./components/class-components/ListRendering";

function App() {
  return (
    <div className="App">
      {/*<h3> React Training </h3>*/}
      {/*<Welcome/>*/}
      {/*<ConditionalRendering/>*/}
      {/*<BindingHandlers />*/}
      <ListRendering/>
    </div>
  );
}

export default App;
