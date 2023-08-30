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

// function move() {
//     // if (snap == false && position <= 150) {
//     //     position++;
//     //     if (position == 150) {
//     //         snap = true;
//     //     }
//     // } else {
//     //     position--;
//     //     if (position == 0) {
//     //         snap = false;
//     //     }
//     // }
//     // box.style.top = position + 'px';
//     // box.style.left = position + 'px';

    
//     if (position === 0 || position === 150) {
//         snap = !snap;
//     }
//     snap ? position++ : position--;

//     box.style.top = position + 'px';
//     box.style.left = position + 'px';
    
// }

// 

let dir = 1;

// a first way
function move() {
    position += dir;
    if (position === 0 || position === 150) {
        dir = -dir;
    }

    box.style.top = position + 'px';
    box.style.left = position + 'px';
}






setInterval(printTime, 1000);

function printTime() {
    const time = new Date();

    const hours = time.getHours() > 9 ? time.getHours() : '0' + time.getHours();
    const minutes = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes();
    const seconds = time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds();

    const currentTime = `${hours}:${minutes}:${seconds}`;
    
    const h1 = document.createElement('h1');
    h1.innerText = currentTime;

    h1.style.margin = '10px auto 0';
    h1.style.width = 'fit-content';

    // document.body.appendChild(h1);
    if (document.body.children === 3) {
        document.body.appendChild(h1);
    } else {
        document.body.replaceChild(h1, document.body.lastElementChild);
    }
}