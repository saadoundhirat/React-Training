//  so her we access the dom nodes directly and make change to them using Ref.
//  and we can use ref to fitch the input value
import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount (){
        //  to make the input field focus on page load we call the focus method on the current object 
        this.inputRef.current.focus()
        console.log(this.inputRef);
    }

    clickHandler = () => {
        alert (this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.inputRef} />
                <button onClick = {this.clickHandler}> click </button>
            </div>
        )
    }
}

export default RefsDemo
