/**
 * Taskmate: Get it Done with Ease: Your Ultimate Todo Mate!
 * @description - display all task
 * @file - main.js
 * @author - thesyscoder
 */

// navigate to create new task

document.getElementById("newTaskBtn").addEventListener("click", (event) => {
  window.location.href = "newTask.html";
});

// function for showcase the tasks

function renderTasks() {
  // get task from local storage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    addTaskToDOM(task);
  });
}

// Function to add task to DOM
function addTaskToDOM(task) {
  const container = getContainerByStatus(task.status);
  if (container) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("card");
    taskDiv.innerHTML = `
        <h3>${task.title}</h3>
        <hr class="hr">
        <p>${task.description}</p>
        <p>Status: ${task.status.toUpperCase()}</p>
      `;
    container.appendChild(taskDiv);
  }
}
// Function to get container by status
function getContainerByStatus(status) {
  switch (status) {
    case "todo":
      return document.querySelector(".todo-container");
    case "inprogress":
      return document.querySelector(".in-progress-container");
    case "completed":
      return document.querySelector(".completed-container");
    default:
      return null;
  }
}

renderTasks();
