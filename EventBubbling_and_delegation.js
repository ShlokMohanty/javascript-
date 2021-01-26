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
ul.addEventListener('click', e =>{
  console.log('Event in ul');
  e.stopPropagation();
  e.target.remove();
  
});

const box = document.querySelector('.box');
box.addEventListener('mousemove', e => {
  //console.log(e);
  //console.log(e.offsetX,e.offsetY);
  box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`
});
document.addEventListener('wheel', e =>{
  console.log(e.pageX,e.pageY);
});
