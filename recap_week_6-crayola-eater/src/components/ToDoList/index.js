import React, { useState } from "react";
import InputPriority from "../InputPriority";
import InputTask from "../InputTask";
import ToDoListItem from "../ToDoListItem/index";
import "./ToDoList.css";

// Task 2: Making the List!
// This component is responsible for creating the unordered list and determining how the list items behave.
// First, create an array with 3 objects in it. In each object should be 2 key:value pairs. The first property
// of each object should be named 'priority' and should have a value from 0-10 and the second should be called
// 'task' and should include a short description of the task to be done.
const initialTodos = [
  { priority: 5, task: "Walk the dog" },
  { priority: 1, task: "Build a React app" },
  { priority: 0, task: "Eat a fruit" },
];

// Task 3: State.  You are going to need some state for this component. Create three sets of state. The first one should take in the
// whole array above as the initial state and should be able to set a new value for this when the state updates. The second will be
// a description of the task from a user input and should be initially set to an empty string. Finally, the third should be the
// priority of the task and should also be initially set to an empty string.
// LEAVE THIS FUNCTION HERE!
function ToDoList() {
  // Write your state here...
  const [todos, setTodos] = useState(initialTodos);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");

  // Task 6: Adding to a list.
  // MAKE SURE YOU COMPLETE TASK 4 (BELOW) AND TASK 5
  // (IN TODOLISTITEM INDEX.JS ) FIRST
  // Create a function where you spread out the state that holds the array
  // and then add a new priority and task in an object. This new array should be assigned to a variable and then
  // update this state using the new array.

  function addTodo(newTodo) {
    const parsedPriority = parseInt(newTodo.priority, 10);
    if (!newTodo.task || !(parsedPriority >= 0 && parsedPriority <= 10)) {
      return;
    }
    const newTodos = [
      ...todos.map((todoObject) => {
        return {
          ...todoObject,
        };
      }),
      { ...newTodo, priority: parsedPriority },
    ];
    setTodos(newTodos);
    setTask("");
    setPriority("");
  }

  // Task 7: Delete! Create a function that takes in teh index of the item that you want to reemove and spreads out and slices the state
  // that holds the array before and after the index so that this one is removed. Assign this to a variable and then set this variable as
  // the new value of that state.
  function deleteTodo(indexToDelete) {
    const updatedTodos = [
      ...todos.slice(0, indexToDelete),
      ...todos.slice(indexToDelete + 1),
    ];
    setTodos(updatedTodos);
  }

  // Task 4: Returning. You have quite a few things to return here. Let's go through them:
  // - You need to render 2 inputs for the description and priority and use their values in the relevant state in Task 3.
  // - Next, you'll need a button that will invoke the 'adding to list' function in Task 4.
  // - Finally, you'll need an unordered list that maps over the original array, destructuring 'priority' and 'task', and
  // also taking in 'index' for the delete function. Create a component called ToDoListItem that takes in priority,
  // task and delete as props (remember to invoke the delete function from Task 5 for delete).

  return (
    <>
      <section className="new-todo">
        <InputTask handleChange={(newTask) => setTask(newTask)} />
        <InputPriority
          handleChange={(newPriority) => setPriority(newPriority)}
        />
        <button onClick={() => addTodo({ task, priority })}>Add to do</button>
      </section>
      <main>
        <ul className="todo-list">
          {todos.map(({ task, priority }, i) => (
            <ToDoListItem
              key={i}
              task={task}
              priority={priority}
              handleDelete={() => deleteTodo(i)}
            />
          ))}
        </ul>
      </main>
    </>
  );
}

export default ToDoList;
