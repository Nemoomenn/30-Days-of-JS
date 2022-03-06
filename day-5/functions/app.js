// Function Statement aka Function Declaration
function a() {
  console.log('a called!');
}

// Function Expression
const b = function () {
  console.log('b called');
}

// Difference between Function Statement & Function Expression
// -> Hoisting

// Named Function Expression
const c = function zyx() {
  console.log('c called');
}

// Dofference between Parameters & Arguments
const d = function (param) {
  console.log(`${param} world!`);
}
d('argument')

// First Class Functions aka First Class Citizens (Ability to be used like value)
const e = function(adder){
  adder(5,6);
}

e((a,b) => {
  return a + b;
})

// Arrow Functions
const f = () => console.log('Aroowwwwwww!!!!!1');