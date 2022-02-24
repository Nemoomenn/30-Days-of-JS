const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log(username.value);
  const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  if (usernamePattern.test(username)) {
    feedback.textContent = 'that username is valid!';
  } else {
    feedback.textContent = 'username must contain letters only and be between 6 & 8 characters long.';
  }
});
