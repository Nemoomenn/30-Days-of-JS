// rest parameter
const double = (...nums) => {
  console.log(nums);
  return nums.map((num) => num * 2);
};

const result = double(1, 2, 3, 5, 5, 7, 9, 5, 4, 2, 6, 4, 5, 3, 2, 1);
console.log(result);

// spread syntax (array)
const people = ["sahu", "toni", "ken"];
const members = ["ronaldo", "marcelo", "harry", ...people];
console.log(members);

// spread syntax (objects)
const person = { name: "sahu", age: 20, job: "bragger" };
const personClone = { ...person };
console.log(personClone);

// Symbol
const symbolOne = Symbol("name");
const symbolTwo = Symbol("name");

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo);

const ninja = {};

ninja.age = 30;
ninja["belt"] = "orange";
ninja["belt"] = "black";

ninja[symbolOne] = "Ken";
ninja[symbolTwo] = "Tony";

console.log(ninja);
