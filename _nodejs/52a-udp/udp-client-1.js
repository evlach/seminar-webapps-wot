"use strict";

const dgram = require("dgram");
const client = dgram.createSocket("udp4");
const port = 9200;
const message = Buffer.from("Hi datagram server!");

client.send(message, port, "localhost", (err) => {
    if(err)
    {
        console.error(`client error: ${err.message}`);
    }
    else
    {
        console.log(`client sent message to server`);
    }
});
client.on("message", (msg, rinfo) => {
    console.log(`message '${msg}' acknowledged from ${rinfo.address}:${rinfo.port}`);
    client.close();
});