"use strict";
const fs = require("fs");
fs.readFile("a.xyz", (err, data) =>
{
    if (err) 
    {
        console.error(err.message);
    }
    else
    {
        console.log("File 'a.xyz' exists!");
    }
});