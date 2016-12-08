"use strict";
const cp = require("child_process");
if (process.platform === "win32")
{
    console.log("Unsupported platform!");
    process.exit(0);
}
const ls = cp.spawn("ls", ["-lh", "/tmp"]);

ls.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
});

ls.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
});
