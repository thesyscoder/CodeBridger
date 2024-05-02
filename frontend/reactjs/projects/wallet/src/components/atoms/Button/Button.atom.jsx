import React from "react";
import "./button.style.scss";

const Button = ({
  title,
  className = "primary",
  onClickAction,
  disabled = false,
}) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClickAction}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
