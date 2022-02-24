// for loops
for (let index = 0; index < 5; index += 1) {
  console.log(index);
}

const names = ['shaun', 'ken', 'tomy'];

for (let index = 0; index < names.length; index += 1) {
  const element = names[index];
  console.log(element);
}

// while loop
let i = 0;
while (i < 6) {
  console.log(i);
  i += 1;
}

// do while loop
i = 0;
do {
  console.log(i);
  i += 1;
} while (i < 5);

// if statement
const age = 24;

if (age > 19) {
  console.log('You are over 19 years old');
} else if (age === 19) {
  console.log('You are 19.');
} else {
  console.log('You are less than 19 years old.');
}

const ninjas = ['shaun', 'ken', 'tony', 'toby'];

if (ninjas.length > 4) {
  console.log('thats a lot of ninjas');
}

// logical NOT (!)
const user = false;
if (!user) {
  console.log('You must be logged in.');
}

// switch statements
const grade = 50;

switch (grade) {
  case 50:
    console.log('You got A!');
    break;
  case 40:
    console.log('You got B!');
    break;
  case 30:
    console.log('You got C!');
    break;
  case 20:
    console.log('You got D');
    break;
  default:
    console.log('Failed!');
}

// functions
// function declaration  // hoisting works
function greet() {
  console.log('hello there!');
}

// function expression    // hoisting doesn't work
const speak = function () {
  console.log('good day!');
}; // remember semicolon

greet();
speak();

// regular function
const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};

// arrow function
const calcAreaAF = (radius) => 3.14 * radius ** 2;

calcArea(14);
calcAreaAF(12);

// callbacks and foreach
const people = ['mario', 'ken', 'tomy', 'toby'];
people.forEach((person) => console.log(person));
