// Cache DOM elements
const newTaskBtn = document.querySelector(".task-btn");
const submitBtn = document.querySelector(".submit");
const titleInput = document.querySelector(".title");
const descriptionInput = document.querySelector(".description");
const addTaskSection = document.querySelector(".add-task-section");
const taskListSection = document.querySelector(".task-list-section");
const taskList = document.querySelector(".task-list");
const statusPara = document.querySelector(".task-status");

// Add event listener to toggle visibility
newTaskBtn.addEventListener("click", () => {
  addTaskSection.style.display = isVisible ? "none" : "flex";
  taskListSection.style.display = isVisible ? "flex" : "none";
  isVisible = !isVisible;
});

// Variable to track visibility state
let isVisible = false;

// Add event listener to add new task
submitBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (title === "" || description === "") {
    alert("Please provide both title and description");
    return;
  }

  // Create new list item
  const listItem = document.createElement("li");
  listItem.classList.add("task-item");

  // Create h3 for title
  const titleH3 = document.createElement("h3");
  titleH3.classList.add("task-title");
  titleH3.textContent = title;

  // Create p for task description
  const descriptionP = document.createElement("p");
  descriptionP.classList.add("task-description");
  descriptionP.textContent = description;

  // status p

  statusPara.textContent = "In Progress";

  // Append h3, p, and status to li
  listItem.appendChild(titleH3);
  listItem.appendChild(descriptionP);
  listItem.appendChild(statusPara);

  // Append li to ul
  taskList.appendChild(listItem);

  // Clear input fields
  titleInput.value = "";
  descriptionInput.value = "";

  // Hide add task section and show task list section
  addTaskSection.style.display = "none";
  taskListSection.style.display = "flex";
});
// Add event listener to new list item for marking completion
listItem.addEventListener("click", () => {
  listItem.classList.add("completed");
  statusPara.textContent = "Completed";
});
