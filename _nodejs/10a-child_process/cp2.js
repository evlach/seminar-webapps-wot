"use strict";
const cp = require("child_process");
let ls;
if (process.platform === "win32")
{
    ls = cp.spawn("cmd.exe", ["/c", "dir", process.env["TEMP"]]);
}
else
{
    ls = cp.spawn("ls", ["-lh", "/tmp"]);
}

ls.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
});

ls.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
});