import React, { useState } from "react";

const UseStateWithObj = () => {
  const [userName, setUserName] = useState({ fname: "", lname: "" });

  const { fname, lname } = userName;
  return (
    <div>
      <input
        type="text"
        value={userName.fname}
        onChange={(e) => setUserName({ ...userName, fname: e.target.value })}
      />
      <input
        type="text"
        value={userName.lname}
        onChange={(e) => setUserName({ ...userName, lname: e.target.value })}
      />

      <hr />
      <hr />
      <h3>
        user Name {fname} . 
        {lname}
      </h3>
    </div>
  );
};

export default UseStateWithObj;
