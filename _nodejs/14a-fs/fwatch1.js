"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const tmp = os.tmpdir();
const ftmp = path.join(tmp, "temporary.txt");

let watcher = fs.watch(tmp, { "encoding": "buffer" }, (event, filename) => {
    console.log(`File: ${filename}. Event: ${event}`);
});

fs.openSync(ftmp, "w");
fs.unlinkSync(ftmp, (err) => {
    if(err)
    {
        console.error(err.message);
    }
});
watcher.on("error", (err) => {
    console.error(err.message);
});