//  we also can use forwarding Refs to achieve the same functionality with react  

import React, { Component } from 'react'
import RefChild from './RefChild'

export class RefParent extends Component {
    constructor(props) {
        super(props)
    
        this.parentRef = React.createRef()
    }
    childInputHandler = ()=>{
        this.parentRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <RefChild  ref= {this.parentRef}/>  {/*assign the ref to component*/}
                <button onClick={this.childInputHandler}> click to focus the child input element </button>
            </div>
        )
    }
}

export default RefParent


