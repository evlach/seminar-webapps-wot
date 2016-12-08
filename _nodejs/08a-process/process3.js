"use strict";

process.on("exit", (code) =>
{
    console.log("##### Process memory usage: " +  JSON.stringify(process.memoryUsage(), null, 0));
    console.log(`##### Process uptime: ${process.uptime()}`);
    console.log(`##### Finishing the process with code ${code} #####`);
});

process.on("uncaughtException", (err) =>
{
    console.log(`##### Exception caught: ${err.message}`);
    process.exit(1);
});

start();
