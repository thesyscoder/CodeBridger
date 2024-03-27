/**
 * Taskmate: Get it Done with Ease: Your Ultimate Todo Mate!
 * @description - create task
 * @file - tasks.js
 * @author - thesyscoder
 */

// function to handle task inputs and store into local storage

function createNewTask() {
  // add event listener on task form
  document.getElementById("newTaskForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const message_box = document.getElementById("message");
    const title_input = document.getElementById("title").value.trim();
    const description_input = document
      .getElementById("description")
      .value.trim();
    const selected_status = document.getElementById("status").value.trim();

    // check if input is empty
    if (!title_input || !description_input) {
      displayMessage(
        "Please enter task title and description.",
        message_box,
        "#f0ad4e"
      ); // Red color for empty fields
      return;
    }
    const task = {
      title: title_input,
      description: description_input,
      status: selected_status,
    };

    // save the task into local storage
    saveTask(task);
    displayMessage("Task added", message_box, "#5cb85c");
    window.location.href = "home.html";
  });
}

function displayMessage(message, element, color) {
  element.textContent = message;
  element.style.display = "block";
  element.style.backgroundColor = color;
  setTimeout(() => {
    element.style.display = "none";
  }, 2000);
}

// function for save task
function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

createNewTask();
