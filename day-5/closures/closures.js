// function x(){
//   var a = 8;
//   return function y() {
//     console.log(a);
//   }
// }
// const z = x();

// z();

function z() {
  let b = 10;
  function x() {
    var a = 8;
    function y() {
      console.log(a,b);
    };
    y();
  }
  x();
}
z();
