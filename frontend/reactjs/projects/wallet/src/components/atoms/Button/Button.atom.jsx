import React from "react";
import "./button.style.scss";

const Button = ({ className = "primary", title, onClickAction, icon }) => {
  return (
    <div className="button-container">
      <button type="button" className={className} onClick={onClickAction}>
        {icon && <span className="icon">{icon}</span>}
        {title}
      </button>
    </div>
  );
};

export default React.memo(Button);
