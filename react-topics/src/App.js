import "./App.css";
import React from "react";
import Welcome from "./components/class-components/Welcome";
import BindingHandlers from "./components/class-components/BindingHandlers";
import ConditionalRendering from "./components/class-components/ConditionalRendering";
import ListRendering from "./components/class-components/ListRendering";
import RefsDemo from "./components/class-components/RefsDemo";
import RefParent from "./components/class-components/refTargetChild/RefParent";
import Portals from "./components/class-components/Portals";

// these two components to handel the error in the applications can be used based on the error type and render proper UI to not break the dom tree 
import ErrorBoundary from "./components/class-components/ErrorBoundary";
import DisplayName from "./components/class-components/DisplayName";

function App() {
  return (
    <div className="App">
      {/*<h3> React Training </h3>*/}
      {/*<Welcome/>*/}
      {/*<ConditionalRendering/>*/}
      {/*<BindingHandlers />*/}
      {/*<ListRendering/>*/}
      {/*<RefsDemo/>*/}
      {/*<RefParent/>*/}
      {/**/}
      {/* <Portals /> */}
      <ErrorBoundary>
        <DisplayName name="saadoun" />{" "}
        {/* this is the child boundary this.props.children*/}
      </ErrorBoundary>
      <ErrorBoundary />
      <DisplayName name="mohammad" />{" "}
      {/* this is the child boundary this.props.children*/}
      <ErrorBoundary />
      <ErrorBoundary>
        <DisplayName name="dhirat" />{" "}
        {/* this is the child boundary this.props.children*/}
      </ErrorBoundary>
    </div>
  );
}

export default App;
