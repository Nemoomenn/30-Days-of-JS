// eslint-disable-next-line no-undef
const list = document.querySelector('ul');
const form = document.querySelector('form');

const addRecipe = (recipe, id) => {
  const html = `
  <div> <li data-id="${id}" > ${recipe.title}
  <button class="btn btn-danger btn-sm my-2"> Delete </button>
  </li> </div>

  `;
  list.innerHTML += html;
};

const deleteRecipeUI = (id) => {
  const recipes = document.querySelectorAll('li');
  recipes.forEach((recipe) => {
    if (recipe.getAttribute('data-id') === id) {
      console.log(recipe);
      recipe.remove();
    }
  });
};

// eslint-disable-next-line no-undef
// db.collection("recipes")
//   .get()
//   .then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//       addRecipe(doc.data(), doc.id);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
db.collection('recipes').onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    const { doc } = change;
    if (change.type === 'added') {
      addRecipe(doc.data(), doc.id);
    } else if (change.type === 'removed') {
      deleteRecipeUI(doc.id);
    }
  });
});

// add document
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };
  db.collection('recipes')
    .add(recipe)
    .then(() => {
      console.log('Added');
    })
    .catch((err) => {
      console.log(err);
    });
});

// delete data
list.addEventListener('click', (e) => {
  console.log(e);
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.parentElement.getAttribute('data-id');
    db.collection('recipes')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Deleted');
      });
  }
});
