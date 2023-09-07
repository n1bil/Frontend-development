function getFiveAfterSevenSeconds() {
    setTimeout(() => {
        return 5;
    }, 7000);
}

let res = getFiveAfterSevenSeconds();
console.log(res);

console.log('====== Promise ======');

let promise = new Promise(prom);
function prom(resolved, reject) {                       // resolved - successful; reject - unsuccessful
    setTimeout(() => {
        resolved(5);
    }, 7000);                                           // execute in 7 seconds
}

console.log(promise);

promise.then((value) => { 
    console.log(value + 5);
    return value + 5;
}).then(value => console.log(value / 12));        // output 5 + 5 = 10     |   output = 0.8



let promise2 = new Promise(prom2);
function prom2(resolved, reject) {                       
    setTimeout(() => {
        reject(new Error('Error caused of us'));
    }, 7000);                                           
}

promise2
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(console.log("Print anyway"));
