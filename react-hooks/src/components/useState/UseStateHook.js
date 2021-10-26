import React, { useState } from "react";

//  always call hooks on the top level of the function components
// don't call hooks inside (loops) , (condition), (nested functions)
// Only call hooks from react functions and not just any js functions only react functions

// =============Use useState with single value=============

// const UseStateHook = ({ name }) => {
//   const [userName, setUserName] = useState(name);
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       {userName === "saadoun" ? <h3>Hello {userName}</h3> : <h3>Guest</h3>}
//       <button onClick={()=> setCount(count+1)}>count is  : {count}</button>
//     </div>
//   );
// };

// export default UseStateHook;

// =============Use useState with previous state=============
// const UseStateHook = () => {
//   const initialState = 0;
//   const [count, setCount] = useState(initialState);
//   return (
//     <div>
//       <h2>count value is: {count}</h2>
//       <button onClick={() => setCount(initialState)}>reset count</button>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//         increment count
//       </button>
//       <button onClick={() => setCount((prevCount) => prevCount - 1)}>
//         decrement count
//       </button>
//     </div>
//   );
// };

// export default UseStateHook;

// =============Use useState with arrays=============
//  the same for objects
const UseStateHook = () => {
  const [users, setUsers] = useState([]);

  const addItem = () => {
    setUsers([...users, Math.floor(Math.random() * 10) + 1]);
  };

  const removeItem = () => {
    //    to remove item we can use splice, slice , filter , remove(indexOf, how many), make sure to keep in mind that slice and splice return new array includes the remover items
    console.log(users);
    users.splice(0, 1);
    console.log(users);
    setUsers([...users]);
  };

  return (
    <div>
      {users.map((user, index) => {
        return (
          <React.Fragment key={index}>
            <p>user:#{user}</p>
          </React.Fragment>
        );
      })}

      <button onClick={addItem}>add random user number</button>
      <button onClick={removeItem}>remove user number</button>
    </div>
  );
};

export default UseStateHook;
