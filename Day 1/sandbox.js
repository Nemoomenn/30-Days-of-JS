const article = document.querySelector('article');

// ! For each cannot be used on html collection

Array.from(article.children).forEach((child) => child.classList.add('article-list'));

const title = document.querySelector('h2');
console.log(title.parentElement);
