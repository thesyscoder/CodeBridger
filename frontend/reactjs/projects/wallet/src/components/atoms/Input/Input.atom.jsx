import React from "react";
import "./input.style.scss";

const Input = ({ name, type, placeholder, inputValue, onChangeAction }) => {
  return (
    <div className="input-container">
      <input
        className="input"
        name={name}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeAction}
      />
    </div>
  );
};

export default React.memo(Input);
