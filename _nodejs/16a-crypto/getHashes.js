"use strict";

const crypto = require("crypto");
console.log(`Supported hash algorithms: ${crypto.getHashes()}`);