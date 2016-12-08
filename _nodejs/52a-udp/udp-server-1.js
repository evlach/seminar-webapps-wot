"use strict";

const dgram = require("dgram");
const server = dgram.createSocket("udp4");
const port = 9200;

server.on("error", (err) => {
    console.error(`server error: ${err.message}`);
    server.close();
});
server.on("message", (msg, rinfo) => {
    console.log(`server received message '${msg}' from ${rinfo.address}:${rinfo.port}`);
    server.send("[ACK]", rinfo.port, rinfo.address, (err) => {
        if(err)
        {
            console.error(`server error: ${err.message}`);
        }
        else
        {
            console.log(`server sent [ACK] message to client`);
            server.close();
        }
    });
});
server.on("listening", () => {
    const address = server.address();
    console.log(`server listening on ${address.address}:${address.port}`);
});
server.bind(port, "localhost", () => {
    console.log(`server bound to port: ${port}`);
});