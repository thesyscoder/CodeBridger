/**
 * This script handles adding new todo items to a todo list.
 */

// Get the input field element for todo items
const todo_input = document.getElementsByClassName("todo-input")[0];

// Get the button element for adding new tasks
const btn = document.getElementsByClassName("add-new-task")[0];

// Get the list element where todo items will be displayed
const todo_list = document.getElementsByClassName("todo-list-items")[0];

// Add event listener to the button for adding new tasks
btn.addEventListener("click", () => {
  // Get the trimmed value of the input field
  const todo_value = todo_input.value.trim();

  // Check if the input field is empty
  if (todo_value === "") {
    // If empty, show an alert message
    alert("Please enter a todo item.");
  } else {
    // If not empty, create a new list item element
    const newItem = document.createElement("li");

    // Set the text content of the new list item to the todo value
    newItem.textContent = todo_value;

    // Append the new list item to the todo list
    todo_list.appendChild(newItem);

    // Clear the input field after adding the todo item
    todo_input.value = "";
  }
});
