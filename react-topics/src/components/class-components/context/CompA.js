// context used to provide data to the component tree without the need to pass the data as props to the target component tree.

// to use context 
// 1- we have to create the context 
// 2- provide data to the context 
// 3- consume the data in the components 

import React, { Component } from 'react'
import CompB from './CompB'

export default class CompA extends Component {
    render() {
        return (
            <div>
                <CompB/>
            </div>
        )
    }
}
