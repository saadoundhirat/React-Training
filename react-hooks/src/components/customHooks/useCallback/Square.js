import React from "react";
import { useCountRender } from "./useCountRender";
export const Square = React.memo(({ increment, num }) => {
  useCountRender(); // count how many time it renders
  return (
        <button onClick={() => increment(num)}> {num} </button>
  );
});
