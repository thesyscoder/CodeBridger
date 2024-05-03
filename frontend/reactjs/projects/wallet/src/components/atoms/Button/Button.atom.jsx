import React from "react";
import "./button.style.scss";
const Button = ({
  icon,
  title,
  className = "primary",
  isDisabled = false,
  onClickAction,
}) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={className}
      onClick={onClickAction}
    >
      {icon && <span className="icon">{icon}</span>}
      {title}
    </button>
  );
};

export default Button;
