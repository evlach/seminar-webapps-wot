"use strict";

const util = require("util");
const os = require("os");
console.log(util.inspect(os, {showHidden: true, depth: null, colors: true}));