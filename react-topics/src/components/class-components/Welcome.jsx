import React, { Component } from 'react'

class Welcome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: "",
        }
    }
    
    incrementCount = () =>{
        //  if  the state value depends on previous state then use arrow functions to update the state
        // the setState is asynchronous => it will takes time so make sure any code you add after the setState function to be inside the call back function in the setState({update the state here }, callback function here to use the updated state)  // or we can use async await to solve the problem.


        this.setState((preState , props) =>({
            count: preState.count + 1 // + props.extraValue
        }))
    }


    render() {
        return (
            <div>
                <h3> the count value is : {this.state.count}</h3>
                <button onClick={this.incrementCount}></button>
            </div>
        )
    }
}

export default Welcome
