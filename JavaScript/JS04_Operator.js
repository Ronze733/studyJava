let a = 1;
let b = "1";

let c = a + b;
console.log(c);
console.log(typeof c);

console.log(a / b); // 타입이 다이나믹하게 결정됨
let d = a / b;
console.log(typeof d);

// + - * / %

// 문자 연산자
let hi = "hi~~";
let hi2 = "hello~~";

console.log(hi - hi2);
// NaN (not a number)

// 복합 연산자
let x = 1;
x = x + 1;
console.log(x);

x++;
console.log(x);
