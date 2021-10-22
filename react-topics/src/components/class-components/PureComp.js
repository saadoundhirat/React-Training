// to make pure component using snippet (rpce) and the class will extends from the react pure components class
//  we use react components when we want the component to update when the parent component state or props update su it's implement the should component update method to check if the state or props of the component has been changed the its return true the should component update which will make the pure component re-render.
// it lunch what called shallow comparison to check if the values are the same value and type
// shallow comparison
// 1- primitive types  => a,b are integers or strings or boolean the return true if the values and types are the same.
// 2- complex type  => a,b objects or arrays => return True if a and b has the same reference.

import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    return (
      <div>
        <h1> React pure component</h1>
        <p> Pure components implement should component update with shallow comparison props and state comparison</p>
      </div>
    );
  }
}

export default PureComp;
