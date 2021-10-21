import React, { Component } from "react";

export class ListRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          fname: "ahmad",
          lname: "saad",
          age: "20",
        },
        {
          fname: "saadoun",
          lname: "salem",
          age: "28",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.users.map(({ fname, lname, age }, index) => {
          return (
            <div Style={"badding: 10rem"} key={index}>
              <h3>{fname}</h3>
              <h3>{lname}</h3>
              <h3>{age}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListRendering;
