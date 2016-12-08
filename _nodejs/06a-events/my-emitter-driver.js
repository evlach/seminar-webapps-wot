"use strict";

const MyEmitter = require("./my-emitter");
const myEmitter = new MyEmitter();

myEmitter.on("event", function (s, i)
{
    if(i < 2)
    {
        console.log(this);
    }
    console.log(s);
});
myEmitter.once("one", function ()
{
    console.log("single event occurred!");
});
for(let i = 1; i < 3; i++)
{
    myEmitter.emit("event", `(${i}) an event occurred!`, i);
    myEmitter.emit("one");
}
