// using json placeholder to fitch the data.

import React, { Component } from "react";
import axios from "axios";

export default class GetPost extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       post : [],
       errorMsg: ""
    }
  }
  


  componentDidMount() {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(URL)
      .then((response) => {
        console.log(response);
        this.setState({
          post: response.data
        })
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: "error while fetching the data "
        })
      });

    // try {
    //     let data = await axios.get(URL)
    // } catch (error) {
    //     console.error(error);
    // }
  }

  render() {
      const {post, errorMsg} = this.state
    return (
      <div>
        <h1>Fetching Data using axios and class component</h1>
        {post.length ? post.map((postData) => {
          return (
            <>
              <p>
                post Id: {postData.id} ... post title: {postData.title}
              </p>
            </>
          );
        })
        :
        null
      
      }
      {errorMsg ? <h1>{errorMsg}</h1> : null}
      </div>
    );
  }
}
