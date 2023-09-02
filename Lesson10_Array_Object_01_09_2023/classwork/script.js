console.log('========= Regular =========');
console.log(multiply(3, 4));

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2, 5));



console.log('========= Arrow function =========');
// console.log(multiplyArrow(6, 5));

const multiplyArrow = (a, b) => a * b;

console.log(multiplyArrow(6, 5));

console.log('========= Object =========');

const obj = {
    username: 'John',
    sayHello: function() {
        console.log(this); // this - obj
        console.log(`Hello ${this.username}`);
    }
}

obj.sayHello();

const objArrow = {
    username: 'John',
    sayHello: () => {
        console.log(this);  // this - window
        console.log(`Hello ${this.username}`) 
    }
}

objArrow.sayHello();

console.log('========= Object 2 =========');

const person = {
    firstName: 'Bill',
    lastName: 'Brown',
    age: 34,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let arr = Object.keys(person);  // arr ( keys object array ) - it's always array string
console.log(arr);               // ['firstName', 'lastName', 'age', 'fullName']

arr = Object.values(person);    // arr ( values object array )
console.log(arr);               // ['Bill', 'Brown', 34, ƒ]

arr = Object.entries(person);   // arr ( keys and values object array )
console.log(arr);               // [Array(2), Array(2), Array(2), Array(2)]
                                /* 0 : (2) ['firstName', 'Bill']
                                // 1 : (2) ['lastName', 'Brown']
                                // 2 : (2) ['age', 34]
                                // 3 : (2) ['fullName', ƒ]
                                */

arr = Object.entries(person);   
console.log(arr[2]);            // ['age', 34]
console.log(arr[2][1]);         // 34            

console.log('========= Array Methods 2 =========');

arr = ['one', 'two', 'threE', 'eight', 'tHree', 'three', 'six'];


console.log("===== indexOf =====");
let res = arr.indexOf('three', 3);

console.log(arr);   // print array
console.log(res);   // return index an element 'three'


console.log("===== includes =====");
res = arr.includes('nine'); // has or not

console.log(arr);   // print array
console.log(res);   // return true if this element exists or false if this element non-existent


console.log("===== fineIndex =====");
res = arr.findIndex((element, index) => index > 2 && element.toLowerCase() === 'three'); 

console.log(arr);   // original array is unchanged
console.log(res);   // return index the original element or -1 if this element non-existent

res = arr.findIndex(predicateLength3);

function predicateLength3(_, index) {
    // return index >= 2 && element.length === 3;
    return index => 2;
}

console.log(arr);
console.log(res);

res = arr.find((element, index) => index > 3 && element === 'six');

console.log(arr);
console.log(res);   // six