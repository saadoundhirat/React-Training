import "./App.css";
import React, {useState}from "react";
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

// how to use Render Props to pass common functionality to components
import RenderProps from "./components/class-components/HOC/RenderProps";
import Counter from "./components/class-components/HOC/Counter";

//  to import user  context
import CompA from "./components/class-components/context/CompA";
import { UserProvider } from "./components/class-components/context/Context"

function App() {
  const [userName, setUserName] = useState("saadoun")
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

      {/* Error Boundary */}

      {/*
      <ErrorBoundary>
        <DisplayName name="saadoun" />{" "}
         * this is the child boundary this.props.children
      </ErrorBoundary>
      <ErrorBoundary />
      <DisplayName name="mohammad" />{" "}
      * this is the child boundary this.props.children
      <ErrorBoundary />
      <ErrorBoundary>
        <DisplayName name="dhirat" />{" "}
      * this is the child boundary this.props.children
      </ErrorBoundary>
      */}

      {/*  Render Props as a functions to share common functionality */}
      {/*<RenderProps render={(count, incrementCount) => <Counter count={count} incrementCount={incrementCount}/>}/> */}

      {/* to use context in react we have to wrap the component with the content provider // the best way to wrap the app component with the context provider  */}
      <UserProvider value={userName}> 
        <CompA/>
      </UserProvider>
    </div>
  );
}

export default App;
