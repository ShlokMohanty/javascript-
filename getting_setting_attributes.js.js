const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','http://www.google.com');
link.innerText = "the google website";
console msg = document.querySelector('p');
console.log(msg.getAttribute('class'));
msg.setAttribute('class','sucess');
msg.setAttribute('style','color:green;');
