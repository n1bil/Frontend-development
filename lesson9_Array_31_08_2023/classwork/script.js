let arr = [1, 2, 3, 'four', 'five'];

console.log(typeof arr); // typeof - object

console.log('====== push ======');
let res = arr.push(6, 7, 9);    // push - add

console.log(arr);           // arr - [1, 2, 3, 'four', 'five', 6, 7, 9]
console.log(res);           // res - length of array (8)

console.log("====== pop ======");

res = arr.pop();            // push - remove last element
console.log(arr);           // arr - [1, 2, 3, 'four', 'five', 6, 7]
console.log(res);           // return delete element

console.log("====== shift ======");

res = arr.shift();          // shift - delete first element
console.log(arr);           // arr - [2, 3, 'four', 'five', 6, 7]
console.log(res);           // return delete element

console.log("====== unshift ======");

res = arr.unshift(0, 1);    // shift - add elements at the beginning of array
console.log(arr);           // arr - [0, 1, 2, 3, 'four', 'five', 6, 7]
console.log(res);           // return new array, length - 8

console.log("====== concat ======");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
res = arr1.concat(arr2);    // concat - don't change the original array! Return a new merged array
console.log(res);           // [1, 2, 3, 4, 5, 6]
console.log(arr1);          // [1, 2, 3]
console.log(arr2);          // [4, 5, 6]

console.log("====== slice ======"); // slice not to change the original
res = arr.slice(2, 6);      // cut the arr from 2 index until 6(not including) [2, 3, 'four', 'five']
// res = arr.slice(1);      // cut the arr from 1 index until end(not including) [0, 1, 2, 3, 'four', 'five', 6, 7]

console.log(res);           // [2, 3, 'four', 'five']
console.log(arr);           // [0, 1, 2, 3, 'four', 'five', 6, 7]

console.log("====== splice ======"); // method splice to change the original, cut the element from index start
res = arr.splice(1, 4);     // cut the arr from 1 index to 4 elements

console.log(res);           // [1, 2, 3, 'four']
console.log(arr);           // [0, 'five', 6, 7]

console.log("====== spread ======");
const uniteArr = [...arr1, ...arr2]; // global copy [1, 2, 3]

console.log(uniteArr);
console.log(arr1);

let arrCopy = arr1;         // surface copy [1, 2, 3]

let obj = {
    username: 'John',
    age: 14
}

let objCopy = {...obj};   // create a new object

console.log(obj);
console.log(objCopy);

obj.age = 18;               // change only in a obj.age

console.log(obj);
console.log(objCopy);

obj = {
    username: 'John',
    age: 14,
    nationality: 'Poland',
    sex: 'male',
    dateOfBirth: '31.08.2023'
}

objCopy = {...obj, age: 20};

console.log(obj);
console.log(objCopy);

arr = [obj, objCopy];
console.log(arr);