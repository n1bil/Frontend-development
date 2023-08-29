console.log('Hello world!');
console.log(5 + 4);
console.log(document.body);

// document.body.innerHTML = '<h1>Hello world!</h1>';

/*
    var - variable (global, deprecated)

    let - variable (block)
    const - constant (can not be overridden)
*/

let a = 10;
a = "Hello";

const div1 = document.getElementById('div1');

console.log(div1);
div1.style.border = '1px solid black';

const abc = document.querySelector('#div1');
console.log(abc);

const pDiv1Array = document.querySelectorAll('#div1 > p');
console.log(pDiv1Array.length);

// ""   ''   ``

for (let i = 0; i < pDiv1Array.length; i++) {
    pDiv1Array[i].innerHTML = `<span>new text ${i + 1}</span>`;
}

const childrenArray = div1.children;
console.log(childrenArray);

for (let i = 0; i < childrenArray.length; i++) {
    childrenArray[i].style.color = 'red';
}

const newP = document.createElement('p');   // create tag <p>
console.log(newP);

const newPText = document.createTextNode('This text has bean created by special method'); // create just an usual text

newP.appendChild(newPText);     // add text to tag <p>
div1.appendChild(newP);     // add this tag <p> to html page

// div1.insertBefore(newP, div1.firstElementChild);




// homework
const box = document.getElementById('box');
const time = setInterval(move, 20);
var snap = false;
let position = 0;
function move() {
    if (snap == false && position <= 150) {
        position++;
        if (position == 150) {
            snap = true;
        }
    } else {
        position--;
        if (position == 0) {
            snap = false;
        }
    }
    box.style.top = position + 'px';
    box.style.left = position + 'px';
}