// find method

const scores = [10, 1, 4, 87, 95, 1, 32, 56, 45, 87, 451, 12, 200];

console.log(scores.find((score) => score > 60));

// chaining

const products = [
  { name: "gold star", price: 30 },
  { name: "green star", price: 36 },
  { name: "blue star", price: 50 },
  { name: "black star", price: 20 },
  { name: "white star", price: 62 },
];

const promos = products
  .filter((product) => product.price > 20)
  .map((product) => `the ${product.name} is ${product.price / 2} pounds`);


console.log(promos);