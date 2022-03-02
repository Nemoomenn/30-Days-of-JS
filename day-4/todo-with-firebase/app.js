const addForm = document.querySelector(".add");
const todoList = document.querySelector(".todos");
const searchForm = document.querySelector(".search");

const addTodo = (doc) => {
  const html = `
  <li data-id = ${doc.id} class="list-group-item d-flex justify-content-between align-items-center">
    <span>${doc.data().todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;
  
  todoList.innerHTML += html;
};


const deleteTodo = (doc) => {
  const todoList = document.querySelectorAll('li');
  console.log(todoList);
  todoList.forEach((todo) => {
    if (todo.getAttribute('data-id') === doc.id) {
      todo.remove();
    }
  });

}




db.collection('todos').onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    console.log('ma ya aaipuge');
    if(change.type === 'added'){
      addTodo(change.doc)
    }else if (change.type === 'removed'){
      console.log('ya pani');
      deleteTodo(change.doc);
    }
  });
});

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const now = new Date();
  const todo = {
    todo: addForm.add.value.trim(),
    timestamp: firebase.firestore.Timestamp.fromDate(now),
  };

  db.collection('todos').add(todo).then((anything) => {
    console.log('added');
  }).catch((err) => {
    console.log(err);
  })
})


// delete
todoList.addEventListener('click', (e) => {
  if (e.target.tagName === 'I') {
    const todoId = e.target.parentElement.getAttribute('data-id');
    db.collection('todos').doc(todoId).delete().then((data) => console.log('deleted')).catch((err) => console.log(err));
  } 
})


// const bubParent = document.querySelector('.bub-parent');
// const bubTest = document.querySelector('.bub-test');

// bubParent.addEventListener('click', ()=> console.log('parent fired'));

// bubTest.addEventListener('click', (e) => {
//   console.log('child fired');
//   e.stopPropagation();
// });
