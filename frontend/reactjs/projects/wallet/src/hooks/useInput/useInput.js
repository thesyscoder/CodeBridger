// custom hook for input component

import { useState } from "react";

const useInput = (initialValues = {}) => {
  const [inputValues, setInputValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const reset = () => {
    setInputValues(initialValues);
  };
  return {
    inputValues,
    onChange: handleChange,
    reset,
  };
};

export default useInput;
