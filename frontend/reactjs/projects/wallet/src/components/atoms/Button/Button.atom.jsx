import React from "react";
import "./button.style.scss";

const Button = ({ className = "primary", title, onClickAction }) => {
  return (
    <div className="button-container">
      <button type="button" className={className} onClick={onClickAction}>
        {title}
      </button>
    </div>
  );
};

export default React.memo(Button);
