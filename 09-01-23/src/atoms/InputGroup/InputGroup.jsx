import React from "react";
import "./inputgroup.scss";

function InputGroup({ label = "", type = "text", ...attributes }) {
  return (
    <label>
      <span>{label}</span>
      <input className="input-text" type={type} {...attributes}></input>
      <input className="input-submit" type="submit" value="🔍" />
    </label>
  );
}

export default InputGroup;
