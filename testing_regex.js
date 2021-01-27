const form = document.querySelector('.login-form');
//const username = document.querySelector('#username')
form.addEventListener('login', e =>{
e.preventDefault();
console.log(username.value);
});
const username = 'shlok';
const pattern = /^[a-z]{6,}$/;
let result = pattern.test(username);
console.log(result);
if(result){
  console.log('regex test passed');
}
else{
  console.log('regex test failed');
}
