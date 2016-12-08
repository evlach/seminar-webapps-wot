"use strict";

const dns = require("dns");
const port1 = 22;
const port2 = 9100;

dns.lookupService("127.0.0.1", port1, (err, hostname, service) => {
    if(err)
    {
        console.error(`message: ${err.message}`);
        console.error(`code:    ${err.code}`);
    }
    else
    {
        console.log(`hostname/port: ${hostname}/${port1}`);
        console.log(`service:       ${service}`);
    }
});
dns.lookupService("127.0.0.1", port2, (err, hostname, service) => {
    if(err)
    {
        console.error(`message: ${err.message}`);
        console.error(`code:    ${err.code}`);
    }
    else
    {
        console.log(`hostname/port: ${hostname}/${port2}`);
        console.log(`service:       ${service}`);
    }
});