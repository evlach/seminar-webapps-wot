"use strict";

const MyEmitter = require("./my-emitter");
const myEmitter = new MyEmitter();

myEmitter.on("error", (err) =>
{
    console.error(err.message);
});

myEmitter.emit("error", new Error("I am an error!"));
