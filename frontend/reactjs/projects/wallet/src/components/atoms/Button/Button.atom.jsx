// Button

import React from "react";
import "./button.style.css";

const Button = ({ className = "primary", title }) => {
  return (
    <div className="button-container">
      <button className={className}>{title}</button>
    </div>
  );
};
export default Button;
