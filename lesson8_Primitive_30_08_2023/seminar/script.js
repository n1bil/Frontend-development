const arr = [1, 2, 3, 'four', 'five', true];
console.log(typeof arr); // object
console.log(arr[3]); // four

console.log(typeof arr[3]); // string

arr[10] = 100500;
console.log(arr[9]);   // undefined
console.log(arr);

arr.length = 1000;
console.log(arr);

/*
    Primitives types:
        1. Number: 10, -5, 3.14, NaN;
        2. String: 'hello', 'world', '123'
        3. Boolean: true, false;
        4. Undefined: let a; a is undefined
        5. Null;

        // + - / * % **
*/

console.log(2 ** 4); // degree conversion
console.log(Math.pow(2, 4));

console.log(1 + '2'); // 12
console.log('3' * '4'); // 12
console.log('3ssda' * '4'); // NaN

// primitive (save by value)

let a = 6;
let b = a;

b = 10;
console.log(a);
console.log(b);

// object (save by reference to a memory location)

const arrNew = [1, 2, 3];
let arrCopy = arrNew;

arrCopy[0] = 100;

console.log(arrNew);
console.log(arrCopy);