import React from "react";
import { useInput } from "./useInput";
export const Input = () => {
  const [{email , password}, handleChange] = useInput({ email: "", password: "" });
  return (
    <div>
      <input type="text" name="email" value={email} onChange={handleChange}   />
      <input type="password" name="password" value={password} onChange={handleChange}   />
      <input type="button" value="Submit" onSubmit={handleChange} />
    </div>
  );
};
