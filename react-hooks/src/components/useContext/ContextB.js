import React, { useContext } from "react";
import { userContext } from "../../App";

const ContextB = () => {
  const userName = useContext(userContext);
  return (
    <div>
      <h2>The user name is : {userName}</h2>
    </div>
  );
};

export default ContextB;
