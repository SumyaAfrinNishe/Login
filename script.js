

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

// Button
    const button = document.getElementById('submit');
    const logo = document.getElementById('logo');
    const buttonText = document.querySelector('.button-text');

    button.addEventListener('click', () => {
      // Expand button and fade the color
      button.style.width = '150px'; // Expanded width
      button.style.backgroundColor = '#ccd9f3'; // Faded color
      button.style.justifyContent = 'flex-start'; // Align content to the left
      buttonText.style.marginLeft = '5px'; // Shift text slightly right
      logo.style.opacity = '1'; // Show the logo

      setTimeout(() => {
        // Revert button to original state
        button.style.width = ''; // Reset to original width
        button.style.backgroundColor = '#007BFF'; // Original color
        button.style.justifyContent = 'center'; // Re-center content
        buttonText.style.marginLeft = '0'; // Reset text position
        logo.style.opacity = '0'; // Hide the logo
      }, 1000);
    });