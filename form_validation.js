const form = document.querySelector('.login-form');
const feedback = document.querySelector('.feedback');
form.addEventListener('login', e =>{
e.preventDefault();
const username = form.username.value;
const usernamePattern = /^[a-zA-Z]{6,12}$/;
if(usernamePattern.test(username))
{
feedback.textContent = 'the username is valid';
}
else{
  feedback.textContent = 'the username should contain characters only and it should be 6 to 12 chqaracters long';
}
});
