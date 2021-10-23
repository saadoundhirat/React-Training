import React, { Component } from "react";

// Higher order components used to share functionality between components but if there is a lot of nesting this will not be the best way to share the functionality.

// what is HOC:
//  a pattern where a function takes a component as an argument and return new component
// ex: const newComp = higherOrderComp(OriginalComp) // take the original comp and add functionality to it and return enhanced new component.

const UpdatedComp = (OriginalComponent, num) => {
  class HigherOrderComponent extends Component {
    // to return new component
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount() {
      this.setState((prevState, props) => ({
        count: prevState.count + num,
      }));
    }

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      ); // add functionality here as props to the component
    }
  }

  return HigherOrderComponent; // this the new function that include the functionality
};

export default UpdatedComp;

//  to use it we wrap the functions with the updated component to return new function that has the functionality, and we can use this way to not repeat code in each component.
