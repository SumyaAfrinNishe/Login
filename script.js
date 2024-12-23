

// Simulating a correct username and password
const correctUsername = "user123";
const correctPassword = "password123";

// Function to handle login
function handleLogin(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if the credentials match
  if (username === correctUsername && password === correctPassword) {
    alert("Login successful!"); // Successful login alert (optional)
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

// Attach event listener to the form
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", handleLogin);