// React.memo used to achieve the same as Pure component but with functional component, it's add something to the component and return higher order components to avoid unnecessary re-rendering if the data is not changed 

import React from 'react'

function MemoComponent() {
    console.log(" the components using react memo");
    return (
        <div>
            <h3>React memo</h3>
        </div>
    )
}

export default React.memo(MemoComponent) // return new function 
