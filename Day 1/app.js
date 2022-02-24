// string
console.log('Hello World!');

const email = 'mario@gmail.com';
console.log(email);

// string concatenation
const firstName = 'Nemo';
const lastName = 'omen';

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

// getting characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
const result = fullName.toLowerCase(); // Does not modify real value
console.log(result, fullName);
console.log(email.indexOf('@'));

// useful string methods
const rawText = 'SomeJustRandomText';
console.log(rawText.lastIndexOf('m'));

const sliced = rawText.slice(0, 6);
console.log(sliced);

const substred = rawText.substr(1, 6);
console.log(substred);

const replaced = rawText.replace('n', 'm');
console.log(replaced);

// template string
const title = 'Best book of 2022';
const author = 'Derek';
const likes = 300;

const finalString = `Tue book called ${title} by ${author} has ${likes} likes`;
console.log(finalString);

// arrays
const ninjas = ['sahun', 'ryu', 'ben'];
console.log(ninjas);

ninjas[0] = 'kri';
console.log(ninjas);

console.log(ninjas.length);

// useful arrays methods
const joined = ninjas.join(',');
console.log(joined);

ninjas.push('lame');
console.log(ninjas);

ninjas.pop();
console.log(ninjas);

// Null: Explicitly set a variable with no value
const age = null;

console.log(age, age + 3, `the age is ${age}`);

// Undefined: For variables that have not yet been defined
const score = null;

console.log(score, score + 3, `the age is ${score}`);

// boolean
// booleans & comparisons
console.log(true, false);

// methods can return booleans
const officeEmail = 'luig@twwet.com';
const containsAt = officeEmail.includes('@');
console.log(containsAt);

// comparison operators
const number = 52;
console.log(number === 54);

// console.log(number == '52');
console.log(number === '52');

// type conversion
const finalScore = '200';
const intScore = Number(finalScore);
console.log(intScore, typeof intScore);
