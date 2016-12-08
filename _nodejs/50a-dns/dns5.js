"use strict";

const dns = require("dns");

dns.resolve("nodejs.org", "A", (err, addresses) => {
    if(err)
    {
        console.error(err.message);
    }
    else
    {
        console.log(`IPv4 addresses: ${addresses}`);
    }
});
dns.resolve("nodejs.org", "AAAA", (err, addresses) => {
    if(err)
    {
        console.error(err.message);
    }
    else
    {
        console.log(`IPv6 addresses: ${addresses}`);
    }
});