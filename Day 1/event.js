const button = document.querySelector('button');
// button.addEventListener('click',() => console.log('Clicked!!!'));

const items = document.querySelectorAll('li');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
  ul.innerHTML += '<li>Something new!</li>';
});

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     // console.log('Item Clicked!!!');
//     // console.log(e.target);
//     // e.target.style.textDecoration = 'line-through';
//     e.target.remove();
//   });
// });

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});
