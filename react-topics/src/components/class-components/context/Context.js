// context used to provide data to the component tree without the need to pass the data as props to the target component tree.

// to use context 
// 1- we have to create the context 
// 2- provide data to the context 
// 3- consume the data in the components 

import React from "react";


// 1- make the context 
const UserContext = React.createContext()  // comes with provider and consumer // here we can add default value to the context provider between the () then we don't have to use the provider as a wrapper to the component itself

const UserProvider  = UserContext.Provider // we import it in the app.js to provide the data.
const UserConsumer  = UserContext.Consumer

export {UserProvider, UserConsumer}
//  another way to consume the context data (using this.context and contextType) // ex: in component CompC
export default UserContext