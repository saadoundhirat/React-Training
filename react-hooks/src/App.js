// search about useImmer hooks when using reducers 
import React, { useReducer } from "react";
import UseReducerCompA from "./components/useReducer/UseReducerCompA";


/* how to use useReducer with useContext */
export const UserContext = React.createContext();
const initState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const App = () => {
  const [currState, dispatch] = useReducer(reducer, initState);
  return (
    <UserContext.Provider value={{ state: currState, dispatchFn: dispatch }}>
      <React.Fragment>
        <UseReducerCompA />
      </React.Fragment>
    </UserContext.Provider>
  );
};

export default App;
