const inp = document.getElementById('inp');
const btn = document.getElementById('btn');
inp.onchange = changeHandler();

function changeHandler(e) {
    console.log(e);
}

btn.onclick = clickHandler;

function clickHandler(e) {
    console.log(e);
}

btn.addEventListener('keypress', (e) => { 
    console.log(e);
    if (e.code === 'Space') {
        console.log("You pressed space");
    } else {
        console.log("You pressed another button");
    }
});

inp.addEventListener('focus', (e) => {
    console.log(e);
    e.target.style.fontSize = '18px';
});

inp.addEventListener('blur', (e) => {
    console.log(e);
    e.target.style.fontSize = '14px';
});

inp.addEventListener('input', (e) => {
    console.log(e.target.value);
});

inp.addEventListener('input', (e) => {
    if (e.target.value === '123456') {
        return document.body.style.background = 'aqua';
    }
});