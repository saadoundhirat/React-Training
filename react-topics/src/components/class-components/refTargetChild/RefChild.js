import React, { Component } from 'react'

export class RefChild extends Component {
    constructor(props) {
        super(props)
        this.inputTargetRef = React.createRef()
    }
    
    focusInput (){
        this.inputTargetRef.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputTargetRef} />
            </div>
        )
    }
}

export default RefChild
