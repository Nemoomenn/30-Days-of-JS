// store data in local storage
localStorage.setItem("name", "mario");
localStorage.setItem("age", "84");

// get data from local storgage
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");
console.log(name, age);

// updating data
name = localStorage.name = "Harry";

// deleting data from local storage
localStorage.removeItem("name");
localStorage.clear();

const todos = [
  {
    text: "play minecraft",
    time: 3,
  },
  {
    text: "play reblok",
    time: 6,
  },
  {
    text: "play pubg",
    time: 5,
  },
  {
    text: "play carrom",
    time: 8,
  },
];

localStorage.setItem('todos',JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));