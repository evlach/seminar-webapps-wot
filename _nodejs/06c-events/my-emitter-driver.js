"use strict";

const MyEmitter = require("./my-emitter");
const myEmitter = new MyEmitter();

for(let i = 1; i < 3; i++)
{
    myEmitter.emit("event", `(${i}) an event occurred!`, i);
    myEmitter.emit("one");
}
