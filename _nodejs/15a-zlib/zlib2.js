"use strict";

const zlib = require("zlib");
const input = "I am an example string.";
zlib.deflate(input, (err, buffer) =>
{
    if (err)
    {
        console.error(err.message);
    }
    else
    {
        console.log(buffer.toString("base64"));
    }
});