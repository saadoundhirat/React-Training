//  if there is error in one of the components in rendered component the hole tree will be brock
// error boundary provide if error had been catch it will display another UI and not brake the hole tree of components.

import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  getDerivedStateFromError(error) {
    // here we catch the error and return new UI
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
      console.error(error); // log the error 
      console.error(info); // information related to the error message 
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
        </div>
      );
    }
    return this.props.children // refers to the children component (Display name of and child in the error boundary scope )
  }
}
