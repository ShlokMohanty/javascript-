const form = document.querySelector('.login-form');
const username = document.querySelector('#username')
form.addEventListener('login', e =>{
e.preventDefault();
console.log(username.value);
});
