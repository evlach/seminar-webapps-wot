"use strict";

const label = "10-times"
let times = 0;
console.time(label);
let a = setInterval(()=>{
    const max_times = 10;
    if(++times > max_times)
    {
        clearInterval(a);
        console.timeEnd(label);
    }
    else
    {
        console.log(`Callback called ${times} times.`);
    }
}, 500);
