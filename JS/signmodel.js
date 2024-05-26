
window.onload = function() {
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const signupBtn = document.getElementById('signupBtn');
const signupModal = document.getElementById('signupModal');
const logoutBtn = document.getElementById('logoutBtn');

// Check if user is logged in (For demo purpose, using localStorage)
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
updateUI(isLoggedIn);

// Event listener for login button click
loginBtn.addEventListener('click', function() {
  loginModal.style.display = 'block';
});

// Event listener for signup button click
signupBtn.addEventListener('click', function() {
  signupModal.style.display = 'block';
});

// Event listener for logout button click
logoutBtn.addEventListener('click', function() {
  // For demo purpose, clear localStorage
  localStorage.removeItem('isLoggedIn');
  updateUI(false);
});

// Close login modal when close button or outside modal area is clicked
window.addEventListener('click', function(event) {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

// Close signup modal when close button or outside modal area is clicked
window.addEventListener('click', function(event) {
  if (event.target === signupModal) {
    signupModal.style.display = 'none';
  }
});

// Prevent form submission for login form
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Perform login logic here
  // After successful login, you can redirect the user or perform any other action
  // For demo, just close the login modal and show logout button
  localStorage.setItem('isLoggedIn', 'true');
  loginModal.style.display = 'none';
  updateUI(true);
});

// Prevent form submission for signup form
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Perform signup logic here
  // After successful signup, you can redirect the user or perform any other action
  // For demo, just close the signup modal and show logout button
  localStorage.setItem('isLoggedIn', 'true');
  signupModal.style.display = 'none';
  updateUI(true);
});

// Function to update UI based on login status
function updateUI(isLoggedIn) {
  if (isLoggedIn) {
    loginBtn.style.display = 'none';
    signupBtn.style.display = 'none';
    logoutBtn.style.display = 'block';
  } else {
    loginBtn.style.display = 'block';
    signupBtn.style.display = 'block';
    logoutBtn.style.display = 'none';
  }
}
    
};
