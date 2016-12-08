"use strict";

console.log("##### Process environment variables before change: " +
    JSON.stringify(process.env, null, 4));
process.env["HISTSIZE"] = 10;
console.log("##### Process environment variables after change: " +
    JSON.stringify(process.env, null, 4));