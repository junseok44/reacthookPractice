import { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const { newValue } = e.target.value;
    let setUpdate = true;
    if (typeof validator === "function") {
      setUpdate = validator(newValue);
    }
    if (setUpdate) {
      setValue(newValue);
    }
  };

  return { value: value, onChange };
};
