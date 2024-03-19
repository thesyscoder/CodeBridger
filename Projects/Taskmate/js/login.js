/**
 * Taskmate: Get it Done with Ease: Your Ultimate Todo Mate!
 * @description - Login page for taskmate app
 * @file - login.js
 * @author - thesyscoder
 */

function handleLoginFormSubmission() {
  // Store default username and password in local storage (for demonstration purposes)
  localStorage.setItem("username", "john");
  localStorage.setItem("password", "password");

  // Add event listener to handle form submission
  document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const username_input = document.getElementById("username").value.trim();
    const password_input = document.getElementById("password").value.trim();
    const message_box = document.getElementById("message");

    // Check if input fields are empty
    if (!username_input || !password_input) {
      displayMessage(
        "Please enter username and password",
        message_box,
        "#f0ad4e"
      ); // Red color for empty fields
      return; // Prevent further execution
    }

    // Check if input credentials match stored credentials
    if (
      localStorage.getItem("username") === username_input &&
      localStorage.getItem("password") === password_input
    ) {
      // Redirect to index.html upon successful login
      displayMessage("Login success", message_box, "#5cb85c");
      window.location.href = "index.html";
    } else {
      displayMessage("Login failed", message_box, "#d9534f"); // Red color for login failure
      clearInputFields();
    }
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

function clearInputFields() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

// Call the function to handle login form submission
handleLoginFormSubmission();
