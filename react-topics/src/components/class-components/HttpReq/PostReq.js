// Note => 
// we can use Formic to handle our forms
// If we are using redux we can use redux axios middleware


import axios from "axios";
import React, { Component } from "react";

export default class PostReq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postId: 0,
      postTitle: "",
      postBody: "",
    };
  }

  eventHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    const URL = "https://jsonplaceholder.typicode.com/posts";
    // await axios.post(URL, this.state)
    axios
      .post(URL, this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  render() {
    const { postId, postTitle, postBody } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="postId"
            value={postId}
            onChange={this.eventHandler}
          />
          <input
            type="text"
            name="postTitle"
            value={postTitle}
            onChange={this.eventHandler}
          />
          <input
            type="text"
            name="postBody"
            value={postBody}
            onChange={this.eventHandler}
          />
          <button type="submit">submit form</button>
        </form>
      </div>
    );
  }
}
