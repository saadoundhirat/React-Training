import React, { useReducer } from 'react';



// This approach called discriminated unions in typescript (best practice)
// we can use the old fashion javascript where we use => action.payload || 0
type UpdateAction = {
    type: 'increment' | 'decrement';
    payload: number
}
type ResetAction = {
    type: "reset"
}
type Action = UpdateAction | ResetAction


type State = {
    counter: number;
}

const initState = {
    counter: 0,
}


const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'increment':
            return { counter: state.counter + action.payload }
        case 'decrement':
            return { counter: state.counter - action.payload }
        case 'reset':
            return initState
        default:
            return initState
    }
}

export const UseReducer: React.FC = () => {
    const [counter, dispatch] = useReducer(reducer, initState)
    return (
        <>
            <h2>counter value - {counter}</h2>
            <button onClick={() => dispatch({ type: "increment", payload: 10 })}>increment</button>
            <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        </>
    );
}