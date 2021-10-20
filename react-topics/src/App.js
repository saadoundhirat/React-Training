import './App.css';
import React from 'react'
import Welcome from './components/class-components/Welcome';
import BindingHandlers from './components/class-components/BindingHandlers';
import ConditionalRendering from './components/class-components/ConditionalRendering';

function App() {
  return (
    <div className="App">
      <h3> React Training </h3>
      {/*<Welcome/>*/}
      <ConditionalRendering/>
      <BindingHandlers/>
    </div>
  );
}

export default App;
