const items = document.querySelectorAll('li');
items.forEach(item => {
item.addEventListener('click',e => {
 // console.log(e);
  //console.log(e.target);
e.target.remove();
});
});


const ul = document.querySelector('ul');
const button = document.querySelector('button');
button.addEventListener('click',() => {
  ul.innerHTML += '<li>something new</li>';
});
const items = document.querySelectorAll('li');
items.forEach(item =>{
  item.addEventListener('click',e =>{
    e.target.remove();
  });
});
