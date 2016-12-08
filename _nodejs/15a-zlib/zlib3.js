"use strict";

const zlib = require("zlib");
const buffer = Buffer.from("eJzzVEjMVUjMU0itSMwtyElVKC4pysxL1wMAXHkIGA==", "base64");
zlib.unzip(buffer, (err, buffer) =>
{
    if (err) 
    {
        console.error(err.message);
    } 
    else
    {
        console.log(buffer.toString());
    }
});