import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    onChange: (e) => {
      setValue(e.target.value);
    },
    reset: () => {
      setValue("");
    },
  };
};

export const useCheckbox = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    onChange: (e) => {
      setValue(e.target.checked);
    },
    reset: () => {
      setValue(false);
    },
  };
};


export default useInput;
