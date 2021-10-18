import React, { Component } from 'react'

class BindingHandlers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter : 0
        }
    }

    // Notes 
    // we can bind handlers in four ways 

    // 1-  binding in the body of the function call using 
        //  <button onClick ={this.counterHandler.bind(this)}> incrementCount </button>
        
    // 2- binding using arrow functions in the body of the function call 
        //  <button onClick ={()=> this.counterHandler()}> incrementCount </button>
    
    // 3- binding in the constructor function using
        // this.counterHandler =  this.counterHandler.bind(this) // the official way of binding

    // 4- write the function using the es6 arrow function approach to get read of the this keyword 

    counterHandler(){
        console.log("click is fired")
        this.setState({
            counter: this.state.counter + 1
        })
    }
    
    //  using arrow functions approach
    // counterHandler = () =>{
    //     console.log("click is fired")
    //     this.setState({
    //         counter: this.state.counter + 2
    //     })
    // }
    
    
    render() {
        return (
            <div>
                <h3>How to binding handlers in class components</h3>
                <h3> counter value is: {this.state.counter}</h3>
                <button onClick={this.counterHandler.bind(this)}>click me</button>
            </div>
        )
    }
}

export default BindingHandlers
