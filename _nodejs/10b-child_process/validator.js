"use strict";
const cp = require("child_process");
const path = require("path");

// const binary = "java";
const binary = path.join(process.env["JRE_HOME"], "bin", "java");
const url = "http://edition.cnn.com/";
const opts = { "stdio": ["ignore", "pipe", "pipe"], "shell": true };
const args = [ "-jar", path.join(__dirname, "vnu", "vnu.jar"),
    "--format", "json", url ];
let cout = "";
let cerr = "";
let validator = cp.spawn(binary, args, opts);
validator.stdout.on("data", (data) => { cout += data; });
validator.stderr.on("data", (data) => { cerr += data; });
validator.on("close", (code, signal) =>
{
    if(signal)
    {
        console.error(`HTML5 validator process interrupted with signal: ${signal}`);
    }
    else
    {
        const msgs = JSON.parse(cerr)["messages"];
        console.error(`cout: ${cout}`);
        console.error(`${msgs.length} validation errors for ${url}`);
        msgs.forEach((msg, i) =>
        {
            console.error(`error message [${i+1}]: ${JSON.stringify(msg)}`);
        });
    }
    if(code === null || code === undefined)
    {
        console.error("HTML5 validator process terminated with code: 1");
    }
    else
    {
        console.error(`HTML5 validator process terminated with code: ${code}`);
    }
});
validator.on("exit", (code, signal) => { });
validator.on("error", (err) =>
{
    console.error(JSON.stringify(err, null, 2));
});
// validator.kill("SIGHUP");