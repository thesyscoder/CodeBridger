// Button

import React from "react";
import "./button.style.css";

const Button = ({ className = "primary", title, onClickAction }) => {
  return (
    <div className="button-container">
      <button className={className} onClick={onClickAction}>
        {title}
      </button>
    </div>
  );
};
export default Button;
