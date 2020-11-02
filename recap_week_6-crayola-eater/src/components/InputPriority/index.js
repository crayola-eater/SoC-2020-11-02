import React from "react";
import "./InputPriority.css";

function InputPriority({ handleChange }) {
  return (
    <input
      className="todo-input input__priority"
      type="number"
      min="0"
      max="10"
      step="1"
      onChange={(e) => handleChange(parseInt(e.target.value, 10))}
      placeholder="Priority"
    />
  );
}

export default InputPriority;
