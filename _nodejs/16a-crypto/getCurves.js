"use strict";

const crypto = require("crypto");
console.log(`Supported elliptic curves: ${crypto.getCurves()}`);