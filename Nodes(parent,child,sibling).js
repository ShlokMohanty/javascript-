const article = document.querySelector('article');
console.log(article.children);
console.log(Array.from(article.children));

const article = document.querySelector('article');
Array.from(article.children).forEach(child =>{
    child.classList.add('article-class');
});


const article = document.querySelector('article');
const title = document.querySelector('h2');
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);
