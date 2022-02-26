// async & await

// fetch('books/harry.json').then((response) => {
//   console.log('Resolved: ', response);
//   return response.json();
// }).then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log('Rejected: ', err);
// })

const books = async () => {
  const response = await fetch("books/harry.json");
  if(response.status !== 200){
    throw new Error('Couldn\'t fetch data');
  }
  const data = await response.json();
  return data;
};
books().then((data) => {
  console.log(data);
}).catch((err)=> {
  console.log(err.message);
});

