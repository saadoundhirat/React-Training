//  its way to share common functionality between components where we use props whose value is a function

import React, { Component } from "react";

export default class RenderProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        {/* here we have made the props as a function and we have passed the common functionality as a parameter check ho to use it in app function
         */}
        {this.props.render(this.state.count, this.incrementCount)}
      </div>
    );
  }
}
