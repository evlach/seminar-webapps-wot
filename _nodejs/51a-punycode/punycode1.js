"use strict";

const punycode = require("punycode");
let s = "mañana";
let penc = punycode.encode(s);
let pdec = punycode.decode(penc);
console.log(`encoded: ${penc}`);
console.log(`decoded: ${pdec}`);