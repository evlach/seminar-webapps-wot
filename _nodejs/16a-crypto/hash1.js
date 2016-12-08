"use strict";

const crypto = require("crypto");
const key = crypto.randomBytes(64);
const password = "hello world";

let hash = crypto.createHmac("sha512", key);
hash.update(password);
let value = hash.digest("hex");

console.log(`Password: ${password}`);
console.log(`Key:      ${key.toString("base64")}`);
console.log(`Digest:   ${value}`);