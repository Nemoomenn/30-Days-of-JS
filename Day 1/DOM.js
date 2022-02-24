const para = document.querySelector('div.error');
console.log(para);

const allp = document.querySelectorAll('p');
console.log(allp);

// get an element by ID
const title = document.getElementById('title');
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);

// get elements bu their tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);

// Innertext
const helloPara = document.querySelector('p');
console.log(helloPara.innerText);
para.innerText = 'ninjas are cool!';

// classlist
const content = document.querySelector('p');
console.log(content.classList);
content.classList.add('teer');
console.log(content.classList);
content.classList.remove('greet');
console.log(content.classList);
