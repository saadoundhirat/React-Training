import './App.css';
import React from 'react'
import Welcome from './components/class-components/Welcome';
import BindingHandlers from './components/class-components/BindingHandlers';

function App() {
  return (
    <div className="App">
      <h3> React Training </h3>
      {/*<Welcome/>*/}
      <BindingHandlers/>
    </div>
  );
}

export default App;
