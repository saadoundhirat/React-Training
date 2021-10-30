import React, { useContext } from 'react'
import { UserContext } from '../../App'
const UseReducerCompB = () =>{
  // const counterContext = useContext(UserContext)
  // console.log(counterContext)
  const {state , dispatchFn} = useContext(UserContext)
  console.log(dispatchFn);
  return (
    <>
      <h1>counter value is - {state}</h1>
      <button onClick={()=> dispatchFn({type:"increment"})}>increment counter</button>
    </>
  );
}

export default UseReducerCompB