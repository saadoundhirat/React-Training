/* how to use useMemo hook for performance optimization
    future usage => best way to use it when you finish the application then start debugging the application time then based on the performance of the component we can use useMemo hook
*/
import React, { useMemo, useCallback, useState } from "react";
import { useFetch } from "../useEffect/useFetch"; // to store the longest word in kanye api
// api => "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"

export const UseMemo = () => {
  const [counter, setCounter] = useState(0);

  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  const getLongestWord = useCallback((arr) => {
    console.log("function getLongestWord has been called")
    if (!arr) {
      return [];
    }
    let longestWord = "";
    JSON.parse(arr).forEach((sentence) => {
      sentence.split(' ').forEach((word) => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      });
    });
    return longestWord;
  }, []); // note  => if the dependency array is empty when using the useCall back hook we can move the function outside of the component function to not be re-created each time the component is updated.

  const memoOutput = useMemo(
    () => getLongestWord(data),
    [data, getLongestWord]
  );

  
  return (
    <div>
      {counter}
      <button onClick={() => setCounter((n) => n + 1)}>update state +</button>

      {/* to display the data the comes back from the useMemo  */}
      {memoOutput}
    </div>
  );
};
