"use strict";

const dns = require("dns");

console.log(`DNS servers: ${dns.getServers()}`);