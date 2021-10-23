// get the data from component A 
import React, { Component } from 'react'
import { UserConsumer } from "./Context"
export default class CompD extends Component {
    render() {
        return (
            <div>
                <UserConsumer> {/* this way can be used with class and functional component */}
                    {
                        (userName)=>{
                            return <h3> consume the data from compD:  the user name is  : {userName}</h3>
                        }
                    }
                </UserConsumer>
                
            </div>
        )
    }
}
