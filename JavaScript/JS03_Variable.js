/*
string, boolean, number,
null, object, undefined, function, ..
*/

let age = 20;
console.log(age);
console.log(typeof age);

// var 문제점

// 1. Hoisting
console.log(whyDontUse);

var whyDontUse;
whyDontUse = 1111;

// 2. ignore block

{
  var whyDontUse2;
  whyDontUse2 = 2222;
}
console.log(whyDontUse2);
