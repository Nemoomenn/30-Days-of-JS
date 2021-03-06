let apples: number = 6;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];

let myNumbers: number[] = [7,5,9,7,1,2,3];

let truths: boolean[] = [true,true,true,false,true,false,false];

// Classes
class Car {

}

let car: Car = new Car();

// Object Literal
let point: {
  x: number;
  y: number;
} = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i:number) => {
  console.log(i);
}

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x:number, y:number} = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initalize it later
let words = ['red', 'green', 'blue'];
let foundWord:boolean;

for (let i = 0; i < words.length; i++) {
  if(words[i] === 'green'){
    foundWord = true;
  }
  
}

