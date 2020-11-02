import React from "react";

import "./InputTask.css";

function InputTask({ handleChange }) {
  return (
    <input
      className="todo-input input__task"
      type="text"
      onChange={(e) => handleChange(e.target.value)}
      placeholder="Enter a task..."
    />
  );
}

export default InputTask;
