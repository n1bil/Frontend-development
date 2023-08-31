console.log("Hello world!");

// undefined
let x;
console.log(x);

x = 7;
x = "bye";
console.log(x);

const pi = 3.1415925;
// const pi = 3.14

let y = x;
console.log(y);

console.log("pi = " + pi);

const exp = pi;

console.log(`exp = ${exp} or ${pi}`);
// console.log('exp = ' + exp + ' or ' +  pi);

x = true;
console.log(x);

x = null;
console.log(x);

let res = 7 % 2; // rest of division
console.log(`res = ${res}`);

res = "true" + 5;
console.log(`res = ${res}`);

res = true + 5; // false - 0, true - 1
console.log(`res = ${res}`);

// strict inequality
x = "2" === 2;
console.log(`res = ${x}`); // false

x = "2" === 2;
console.log(`res = ${x}`); // true

res = String(5);
console.log(typeof res);

res = +"5";
console.log(typeof res);

switch (res) {
    case 5:
        console.log(`number: ${res}`);
        break;
    case '5':
        console.log(`string: ${res}`);
        break;
    default:
        console.log("It's not a 5");
}

let age = 17;
let vol = age > 17 ? 42 : 1.5;
console.log(`vol = ${vol}`);

// if (age > 17) {
//     return 42;
// } else {
//     return 1.5;
// }

console.log(+pi.toFixed(2)); // it was 3.1415925 , become 3.14

x = 10;
res = x++ + ++x; // 10 + 12 = 22
console.log(res);

x = 10;
y = 5;

res = add(x, y);
console.log(`res = ${res}`);

function add(a, b) {
    return a + b;
}

x = !!x; // неявное приведение переменной к boolean значению
console.log(x);

let example = 'hello';
console.log(!!example);

// false = 0, '', false, null, NaN, undefined

let username = null;
let nickname = username || 'Anonymous';

greeting();
greeting('Rabindranat');

function greeting(nickname1 = 'Anonymous') {
    console.log(`Hello ${nickname1}`);
}


// Homework
//1
res = sumDigits(1234);
console.log(`res = ${res}`);    // expect to see 10

res = luckyNumber(123871);      // 1 + 2 + 3 === 8 + 7 + 1
console.log(res ? 'Lucky' : 'Unlucky');

function sumDigits(x) {
    let sum = 0;
    // first way
    // let digitsArray = x.toString().split('').map(Number);
    
    // for (let i = 0; i < digitsArray.length; i++) {
    //     sum += digitsArray[i]; 
    // }

    // second way
    while (x) {
        sum += x % 10;          // получили последнюю цифру - 4
        x = (x - x % 10) / 10;  // укоротили число. Было 1234 - стало 123
    }
    return sum;
}

//2
function luckyNumber(x) {
    // let firstSum = 0;
    // let secondSum = 0;
    // let threeNumbers = x.toString().substring(0, 3).split('').map(Number);
    // let anotherThreeNumbers = x.toString().substring(3, 6).split('').map(Number);
    
    // for (let i = 0; i < threeNumbers.length, i < anotherThreeNumbers.length; i++) {
    //     firstSum += threeNumbers[i];
    //     secondSum += anotherThreeNumbers[i];
    // }
    
    // if (firstSum === secondSum) {
    //     return true;
    // }

    // second way
    let secondHalf = x % 1000;
    let firstHalf = (x - secondHalf) / 1000;

    return sumDigits(firstHalf) === sumDigits(secondHalf);
}

//3
function banana() {
    let a = 'a';
    let b = 'b';

    const nan = a * b;
    console.log(`${b}${a}${nan}${a}`.toLowerCase());
}

banana();
// 'b', 'a' = banana