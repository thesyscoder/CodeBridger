import React from "react";
import "./button.style.scss";

const Button = ({
  className = "primary",
  title,
  onClickAction,
  icon,
  disabled,
}) => {
  return (
    <div className="button-container">
      <button
        type="button"
        className={className}
        onClick={onClickAction}
        disabled={disabled}
      >
        {icon && <span className="icon">{icon}</span>}
        {title}
      </button>
    </div>
  );
};

export default React.memo(Button);
