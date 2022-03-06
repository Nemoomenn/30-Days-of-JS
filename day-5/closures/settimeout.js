// function x() {
//   let i = 1;
//   setTimeout(() => {
//     console.log(i);
//   }, 3000);
// }

// x();
// console.log('oh');

// var array = [1, 2, 3, 4, 5]

// for(var i = 0; i < array.length; i++) {
//   setTimeout(() => {
//     console.log(array[i])
//   }, 1000);
// }

// console.log(i);

var array = [1, 2, 3, 4, 5];

for (var i = 0; i < array.length; i++) {
  delay(i);
}

function delay(i) {
  setTimeout(() => {
    console.log(array[i]);
  }, 3000);
}

for (var i = 0; i < 3; i++) {
  setTimeout(((i) => {
    return () => console.log(i);
  })(i), 3000);
}
