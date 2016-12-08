"use strict";

start();
console.log(`##### Process title: ${process.title}`);
console.log(`##### Process version: ${process.version}`);
console.log(`##### Process ID: ${process.pid}`);
console.log(`##### Process arguments: ${process.argv}`);
console.log(`##### Process execution path: ${process.execPath}`);
console.log(`##### Process execution arguments: ${process.execArgv}`);
console.log(`##### Process version: ${process.version}`);
console.log(`##### Process architecture: ${process.arch}`);
console.log(`##### Process platform: ${process.platform}`);
console.log(`##### Process current directory: ${process.cwd()}`);
console.log("##### Process versions:\n" + JSON.stringify(process.versions, null, 4));
console.log("##### Process configuration:\n" + JSON.stringify(process.config, null, 4));

process.on("exit", (code) =>
{
    console.log("##### Process memory usage: " +  JSON.stringify(process.memoryUsage(), null, 0));
    console.log(`##### Process uptime: ${process.uptime()}`);
    console.log(`##### Finishing the process with code ${code} #####`);
});

process.on("uncaughtException", (err) =>
{
    console.log(`##### Exception caught: ${err.message}`);
});

function start()
{
    console.log("##### Starting the process #####");
}