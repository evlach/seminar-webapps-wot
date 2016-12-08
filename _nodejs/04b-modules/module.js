"use strict";

const mocha = require("mocha");

console.log(module.filename);
console.log(module.id);
console.log(module.loaded);
console.log("Module children:");
module.children.forEach((child) => {
    console.log(child.id);
});
