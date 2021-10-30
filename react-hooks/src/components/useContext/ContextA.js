import React, { useContext } from 'react'
import ContextB from "./ContextB"
import { userContext } from "../../App";

const ContextA = () => {
    const userName = useContext(userContext)
    return (
        <div>
            <h3>hello</h3>
            <h2>ContextA userName is : {userName}</h2>
        </div>
    )
}

export default ContextA