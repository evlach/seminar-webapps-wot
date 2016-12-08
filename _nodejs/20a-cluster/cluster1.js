"use strict";

const cluster = require("cluster");
const os = require("os");
const cpus = os.cpus().length;

if (cluster.isMaster)
{
    for (let i = 0; i < cpus; ++i)
    {
        cluster.fork();
    }
    for(let id of Object.keys(cluster.workers))
    {
        cluster.workers[id].process.on("message", function (message)
        {
            console.log("Master receives notice: %s", message.notice);
            cluster.workers[id].process.send("shutdown");
        });
    }
}
else if (cluster.isWorker)
{
    job(cluster.worker);
}

cluster.on("fork", (worker) =>
{
    console.log(`[Master] worker with id: ${worker.id} is forked.`);
});
cluster.on("online", (worker) =>
{
    console.log(`[Master] worker with id: ${worker.id} is online.`);
});
cluster.on("listening", (worker, address) =>
{
    console.log(`[Master] ${worker.id} is now connected to ${address.address}:${address.port}`);
});
cluster.on("disconnect", function(worker)
{
    console.error(`[Master] worker with id: ${worker.id} has disconnected.`);
});
cluster.on("exit", function(worker, code, signal)
{
    console.error(`[Worker ${worker.id}] Died. Code: ${code}. Signal: ${signal}`);
    // restart may be possible
    // cluster.fork();
});

function job(worker)
{
    worker.process.send(
    {
        "notice": `Hi master! I am worker ${worker.id}`
    });
    worker.process.on("message", function (message)
    {
        console.log(`[Worker ${worker.id}] receives notice: ${message}`);
        if(message === "shutdown")
        {
            worker.process.exit(1);
        }
    });
}