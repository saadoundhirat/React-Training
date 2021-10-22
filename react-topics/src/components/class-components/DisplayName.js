import React, { Component } from "react";

export default class DisplayName extends Component {
  render() {
    const { name } = this.props;
    if (name === "saadoun") {
      throw new Error("the name is not allowed");
    } else {
      return <div>{name}</div>;
    }
  }
}
