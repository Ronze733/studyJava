/*
논리 연산자 : 결과 boolean 나오는 거
>, >=, <, <=, ==, !=
*/

let x = 10;
let y = 20;

console.log(x > y);

/*
결합 연산자 : 논리연산자 묶은거
&&, ||,

!(Not)
*/

let a = x > y && y < 20;
console.log(a);

/*
삼항 연산자 : 둘 중 하나
조건식 ? true : false;
*/

x > y ? console.log(true) : console.log(false);

let age = 5;

// 나이가 10살 넘으면 welcom 아니면 go home
let result = age > 10 ? "welcome" : "go home";
console.log(result);

// 입장료
let fee = 10000;
// 나이가 10살 넘으면 1000원, 아니면 500원 할인
let sale;
sale = age > 10 ? 1000 : 500;
// 총 급액
console.log(fee - sale);

// 같다 ==, ===
let stringNum = "10";
let numberNum = 10;

// == 타입을 안따짐
console.log(stringNum == numberNum);
console.log(stringNum != numberNum);
// === 타입까지 따짐
console.log(stringNum === numberNum);
console.log(stringNum !== numberNum);

console.log("-------------");

// Object

let me1 = { myName: "jm", age: 20 };
let me2 = { myName: "jm", age: 20 };
let me3 = me1;

console.log(me1);
console.log(me1 == me2);
console.log(me1 === me2);

console.log(me1 == me3);
console.log(me1 === me3);

console.log("----------");

console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);
console.log("" == false);
console.log("" === false);
