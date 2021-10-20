import React, { Component } from "react";

export class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  render() {
    // rendering inside the render function using if statement
    let msg = "";
    if (this.state.isLoading) {
      msg = <p>this page is loading</p>;
    } else {
      msg = <p>this page done loading</p>;
    }


    // we can also use return with if we want to render based on condition // but it's not preferred in jsx
    
    return (
      <div>
        {msg}
        <p>ternary if statement</p>
        this.state.isLoading ?(<h1>true</h1>) :(<h1>false</h1>)

        <h3>short circuit operator</h3>
        {this.state.isLoading && <div>hello</div>}
      </div>

    );
  }
}

export default ConditionalRendering;
