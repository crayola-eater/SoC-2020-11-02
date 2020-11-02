import React from "react";
import "./ToDoListItem.css";

// Task 5: This component is responsible for creating the different list items.
// Take in priority, task and delete as props.
// Now return a list item containing a heading tag that diplays the task, a p tag that displays the priority
// and finally a button that can will delete the li when clicked.

function ToDoListItem({ task, priority, handleDelete }) {
  return (
    <>
      <li className="todo__item">
        <h3 className="todo__task">{task}</h3>
        <p className="todo__priority">{priority}</p>
        <button className="todo__delete" onClick={handleDelete}>
          <span role="img" aria-label="delete-icon">
            🗑️
          </span>
        </button>
      </li>
    </>
  );
}

export default ToDoListItem;
