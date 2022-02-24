// filter

const scores = [10, 30, 15, 45, 5];

const filteredScore = scores.filter((score) => score > 20);

console.log(filteredScore);

const users = [
  { name: 'harry', premium: true },
  { name: 'yosh', premium: false },
  { name: 'mario', premium: false },
  { name: 'ronaldo', premium: true },
];

const premiumUsers = users.filter((user) => user.premium);

console.log(premiumUsers);

// Map
const prices = [20, 10, 25, 15, 45, 65, 30, 95];
const salePrices = prices.map((price) => price / 2);
console.log(salePrices);

// Reduce
