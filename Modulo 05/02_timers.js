// Timers: 

//setTimeout (funcao, delay)
const delay = 1000;

function print(value1, value2, n) {
    console.log(value1, value2, n);
}

setTimeout(print, delay, 'Felipe', 'JavaScript', 'n'); 

//setInterval (funcao, delay)
const delay1 = 1000;
let  counter = 0;
setInterval(function (){
    console.log('Felipe', counter);
    counter++;
}, delay1);