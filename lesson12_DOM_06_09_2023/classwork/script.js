const decrement = document.getElementById('decrement');
const increment = document.getElementById('increment');
const decrement10 = document.getElementById('decrement10');
const increment10 = document.getElementById('increment10');
const reset = document.getElementById('reset');
const count = document.getElementById('count');

function updateCount(value) {
    count.textContent = +count.textContent + value + '';
}

// let number = count.textContent;

// decrement.addEventListener('click', ()  => {
//     count.textContent = --number + '';
// });

decrement.addEventListener('click', () => updateCount(-1));

decrement10.addEventListener('click', () => updateCount(-10));

increment.addEventListener('click', () => updateCount(1));

increment10.addEventListener('click', () => updateCount(10));

reset.addEventListener('click', ()  => {
    count.textContent = '0'
});