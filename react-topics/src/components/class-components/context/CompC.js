import React, { Component } from 'react'
import CompD from './CompD'
import UserContext from './Context'
export default class CompC extends Component {
    
    static contextType = UserContext // second way to use the context type in react and consume the data and it can only used with class component 

    render() {
        return (
            <div>
                <h3>consume the data using the context type : {this.context}</h3>
                <CompD/>
            </div>
        )
    }
}
// CompC.contextType = UserContext   // first way to use the context type 
