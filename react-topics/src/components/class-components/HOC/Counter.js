import React, { Component } from 'react'

export default class Counter extends Component {
    render() {
        return (
            <div>
                <h3> the counter value : {this.props.count}</h3>
                <button onClick={this.props.incrementCount}> incrementCount</button>
            </div>
        )
    }
}
