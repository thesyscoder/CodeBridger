import React from "react";
import "./input.style.scss";
const Input = ({
  type = "text",
  name,
  placeholder,
  inputValue,
  onChangeAction,
}) => {
  return (
    <input
      className="input"
      name={name}
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={onChangeAction}
    ></input>
  );
};

export default Input;
