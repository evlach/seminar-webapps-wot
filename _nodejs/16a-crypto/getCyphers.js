"use strict";

const crypto = require("crypto");
console.log(`Supported cipher algorithms: ${crypto.getCiphers()}`);