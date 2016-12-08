"use strict";

const fs = require("fs");

fs.stat("/etc/hosts", (err, stat) => {
    if(err)
    {
        console.error(err.message);
    }
    else
    {
        console.log(JSON.stringify(stat, null, 4));
    }
});