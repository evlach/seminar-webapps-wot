"use strict";
const net = require("net");
const connection = net.connect("localhost");

connection.on("error", (err) =>
{
    console.error(err.message);
});