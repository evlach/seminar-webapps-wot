"use strict";

const dns = require("dns");

dns.lookup("nodejs.org", { all: true }, (err, addresses, family) => {
    if(err)
    {
        console.error(err.message);
    }
    else
    {
        console.log(`addresses: ${JSON.stringify(addresses, null, 4)}`);
    }
});