import React, { useState } from "react";

export const useInput = (initialValues) => {
  const [value, setValues] = useState(initialValues);

  return [
    value,
    (e) => {
      setValues({[e.target.name]: e.target.value});
    },
  ];
};
