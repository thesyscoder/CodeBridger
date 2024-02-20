/**
 * @fileOverview This file contains the JavaScript code for TaskEase: Simple Todo List.
 * @author thesyscoder
 * @version 1.0
 */

/**
 * Represents the TaskEase application for managing todo list tasks.
 * @namespace TaskEase
 */

// Get the elements using class

const new_task_btn = document.getElementsByClassName("task-btn")[0];
const submit_btn = document.getElementsByClassName("submit")[0];
const title_input = document.getElementsByClassName("title")[0];
const description_input = document.getElementsByClassName("description")[0];
const add_task_section = document.getElementsByClassName("add-task-section")[0];
const task_list_section =
  document.getElementsByClassName("task-list-section")[0];
const task_list = document.getElementsByClassName("task-list")[0];

// Variable to track visibility state
let isVisible = false;
var listItem = document.createElement("li");
listItem.classList.add("task-item");

new_task_btn.addEventListener("click", () => {
  if (isVisible) {
    add_task_section.style.display = "none";
    task_list_section.style.display = "flex";
  } else {
    add_task_section.style.display = "flex";
    task_list_section.style.display = "none";
  }
  isVisible = !isVisible;
});

// add event listener to add  new task
submit_btn.addEventListener("click", () => {
  // get input value
  const title = title_input.value.trim();
  const description = description_input.value.trim();

  if (title === "" && description === "") alert("please provide data");

  // create h3 for title
  var title_h3 = document.createElement("h3");
  title_h3.classList.add("task-title");
  title_h3.textContent = title;

  // create p for task description
  var description_p = document.createElement("p");
  description_p.classList.add("task-description");
  description_p.textContent = description;

  // append h2 and p to li
  listItem.appendChild(title_h3);
  listItem.appendChild(description_p);

  // append to ui
  task_list.appendChild(listItem);
  title_input.value = "";
  description_input.value = "";
  add_task_section.style.display = "none";
});
