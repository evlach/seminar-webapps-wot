"use strict";

let times = 0;
let a = setInterval(()=>{
    const max_times = 10;
    if(++times > max_times)
    {
        clearInterval(a);
    }
    else
    {
        console.log(`Callback called ${times} times.`);
    }
}, 500);
