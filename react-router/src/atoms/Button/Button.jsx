import React from "react";
import "./button.scss";

function Button({ content, variant = "standard", action, ...otherAttributes }) {
  return (
    <button
      {...otherAttributes}
      onClick={action}
      className={`btn btn-${variant}`}
    >
      {content}
    </button>
  );
}

export default Button;
