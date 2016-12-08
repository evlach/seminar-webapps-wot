"use strict";

const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const gzip = zlib.createGzip();
const inpname = path.join("data", "license.txt");
const outname = path.join("data", "license.txt.gz");
const inp = fs.createReadStream(inpname);
const out = fs.createWriteStream(outname);

inp.pipe(gzip).pipe(out);
inp.on("close", () => {
    console.log(`input stream ${inpname} closed.`);
});
inp.on("end", () => {
    console.log(`input stream size: ${(fs.statSync(inpname))["size"]} bytes.`);
});
out.on("close", () => {
    console.log(`compressed stream size: ${(fs.statSync(outname))["size"]} bytes.`);
    console.log(`compressed stream ${outname} closed.`);
});