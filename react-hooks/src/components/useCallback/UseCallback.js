import React from "react";
const UseCallback = () => {
  return (
    <>
      <p>
        useCallback is used to optimize performance of memoized components it
        will take cache of the function and return if the value or dependencies
        has been changed
      </p>
      <p>
        by default the function before the re-render is deferent than the
        function after the rerender thats why the using React.memo will ot
        change the re-render of the function when it passed as parameter it will
        be new function and has different reference
      </p>
    </>
  );
};

export default UseCallback;
