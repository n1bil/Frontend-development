let x = "text";

// boolean, string, number, bigInt, undefined, null, symbol
let y = 9;
y = 9.2;

let z = 9n;
z = 9.2;

console.log(z);

// parse to string
let str1 = 9 + ''; // "9"

let str2 = String(9);
let str3 = String(true);
console.log(str3);

// parse to number
let num1 = +"9";   // 9
let sum = +"9" + +"18"; // 27
console.log(sum);

let num2 = Number("9"); // 9
let num3 = Number(true); // 1
console.log(num3);
let num4 = Number(false); // 1
console.log(num4);
let num5 = Number("1j%12");
console.log(num5);        // NaN
let num6 = Number(null);
console.log(num6);      // 0
let num7 = Number("");
console.log(num7);

// boolean
const b1 = Boolean("text");
console.log(b1);        // true
const b2 = Boolean("");
console.log(b2);        // false
const b3 = Boolean(10);
console.log(b3);        // true
const b4 = Boolean(-10);
console.log(b4);        // true
const b5 = Boolean(NaN);        // false
const b6 = Boolean(null);       // false
const b7 = Boolean(undefined);  // false

const name = undefined; // undefined - false
if (name) {
    console.log("Guten Tag " + name);
} else {
    console.log("No name");
}

const name2 = "Vladimir";
if (name2) {
    console.log("Guten tag " + name2);
} else {
    console.log("No name");
}

// another way to parse into boolean
console.log(!null && true);     // true
console.log("Apple" && true);   // true

// when we get undefined and when null
let v1; // declare variable
console.log(v1);    // undefined

const arr = ["apple", "orange"];
console.log(arr[4]);    // undefined

let v2 = undefined;
let v3 = null

// null we received, document.getElementById("nonexistent-id")
// null - get in the main, when the method didn't find anything - it returns null

const user = {
    name: "Fedor"
};

console.log(user.name); // "Fedor"
console.log(user.age);  // undefined

// compare operator === - value and type 
// compare operator ==  - value 
console.log(9 === '9'); // false
console.log(9 == '9');  // true     parse to string

// string <-- number <-- boolean
console.log(1 == true); // true     parse to number