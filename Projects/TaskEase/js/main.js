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

// Variable to track visibility state
let isVisible = false;

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
