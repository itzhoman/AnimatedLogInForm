const toggleFormBtn = document.getElementById('toggleFormBtn');
const rightPanel = document.querySelector('.right-panel');
const leftPanelText = document.getElementById('leftPanelText');
const leftPanelMessage = document.getElementById('leftPanelMessage');

toggleFormBtn.addEventListener('click', () => {
  rightPanel.classList.toggle('active');
  
  // Update text based on the current form being displayed
  if (rightPanel.classList.contains('active')) {
    leftPanelText.textContent = "Already have an account? Log in now!";
    leftPanelMessage.textContent = "Access your dashboard with ease.";
    toggleFormBtn.textContent = "Login";  // Change button text to Login
  } else {
    leftPanelText.textContent = "New here? Create an account!";
    leftPanelMessage.textContent = "Sign up and join us today for an amazing experience!";
    toggleFormBtn.textContent = "Sign Up";  // Change button text to Sign Up
  }
});

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Logged in successfully!");
});

const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Account created successfully!");
});
