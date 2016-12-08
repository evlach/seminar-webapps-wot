"use strict";

const dns = require("dns");

dns.lookup("___xyz.com", (err, addresses, family) => {
    if(err)
    {
        console.error(`message: ${err.message}`);
        console.error(`code:    ${err.code}`);
    }
    else
    {
        console.log(`addresses: ${addresses}`);
        console.log(`family:    ${family}`);
    }
});