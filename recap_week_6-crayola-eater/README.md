# WEEK 6 RECAP - CREATING A TODO LIST USING REACT

You've learnt a lot about the importance of immutabilty. In this task, you are going to create a to-do list using everything you have learnt so far. 

## TASK 1: Setting up!
### Complete in the App index.js file. 
- Set up a new React app that renders just one component called ToDoList within the main app component. 
- Everything that we make today will be passed into this. 

## Task 2: Making the List! 
### Complete in the toDoList index.js file. 
- This component is responsible for creating the unordered list and determining how the list items behave. 
- First, create an array with 3 objects in it. In each object should be 2 key:value pairs. The first property of each object should be named 'priority' and should have a value from 0-10 and the second should be called 'task' and should include a short description of the task to be done.


## Task 3: State.
### Complete in the toDoList index.js file. 
- You are going to need some state for this component. Create three sets of state. The first one should take in the whole array above as the initial state and should be able to set a new value for this when the state updates. The second will be a description of the task from a user input and should be initially set to an empty string. Finally, the third should be the priority of the task and should also be initially set to an empty string. 

## Task 4: Returning. 
### Complete in the toDoList index.js file. 
- You have quite a few things to return here. Let's go through them:
- You need to render 2 inputs for the description and priority and use their values in the relevant state in Task 3. 
- Next, you'll need a button that will invoke the 'adding to list' function in Task 4.
- Finally, you'll need an unordered list that maps over the original array, destructuring 'priority' and 'task', and also taking in 'index' for the delete function. Create a component called ToDoListItem that takes in priority, task and delete as props (remember to invoke the delete function from Task 5 for delete). 


## Task 5: This component is responsible for creating the different list items. 
### Complete in the toDoListItem index.js file. 
- Take in priority, task and delete as props. 
- Now return a list item containing a heading tag that diplays the task, a p tag that displays the priority and finally a button that can will delete the li when clicked. 


## Task 6: Adding to a list. 
### Complete in the toDoList index.js file. 
- Create a function where you spread out the state that holds the array and then add a new priority and task in an object. This new array should be assigned to a variable and then update this state using the new array. 

## Task 7: Delete! 
### Complete in the toDoList index.js file. 
- Create a function that takes in teh index of the item that you want to reemove and spreads out and slices the state that holds the array before and after the index so that this one is removed. Assign this to a variable and then set this variable as the new value of that state.


## Task 8: Add CSS and refactor.
- Now that you have completed the todo list, add some styling to this using CSS in the files provided. As an extension, you could also create a new component for the inputs and button and pass down the relevant information to them as props. 

