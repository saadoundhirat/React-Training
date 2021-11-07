//  used when we want to get data from the DOM object so we use it to connect to the dom and get some info and based on the info we do something
// for example get dimension of dom element
// => practical example if we get data from api and display it on the screen we have to make sure that the scree width will fit the text
import React, { useRef, useLayoutEffect } from "react";

export const UseLayoutEffect = () => {
  const inputRef = useRef();
  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};
