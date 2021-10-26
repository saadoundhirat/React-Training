import React, { useState, useEffect } from "react";
// Note that useEffect used to replace the component lifecycle which are:
// 1- componentdidMount
// 2- componentdidUpdate
// 3- componentwillunmount

// we can use the useEffect hook to do the functionality of the above life cycles and it's used to perform side effects in functional components

// useEffect hook takes function the will be executed after each render of the component, also takes dependencies array

// example on how to use useEffect to update the document title using functional components
const UseEffectBasic = () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // so here we are replacing the functionality of comDidMount & comDidUpdate
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  //the dependency array is used to keep track of the changes that will make the useEffect re-render.
  // the return function is used to clean up (timers, eventListeners, subscriptions), So make sure to clean up after the code, it;s doing the componentWillUnmount method life cycle.

  

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
export default UseEffectBasic;
