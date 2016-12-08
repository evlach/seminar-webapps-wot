"use strict";

const os = require("os");

let GIGABYTE = 9.31322575 * 1e-10;
let type = os.type();
let platform = os.platform();
let release = os.release();
let arch = os.arch();
let hostname = os.hostname();
let homedir = os.homedir();
let memory = os.totalmem() * GIGABYTE;
let fmemory = os.freemem() * GIGABYTE;
let networkInterfaces = os.networkInterfaces();
let cpus = os.cpus();

console.log("Type: " + type);
console.log("Platform: " + platform);
console.log("Release: " + release);
console.log("Architecture: " + arch);
console.log("Hostname: " + hostname);
console.log("Homedir: " + homedir);
console.log("Memory: " + memory + " GB");
console.log("Free memory: " + fmemory + " GB");
console.log("Network: " + JSON.stringify(networkInterfaces, null, 4));
console.log("CPUs: " + JSON.stringify(cpus, null, 4));
