"use strict";

const EventEmitter = require('events');

module.exports = class MyEmitter extends EventEmitter
{
    constructor()
    {
        super();
        this.on("event", function (s, i)
        {
            if(i < 2)
            {
                console.log(this);
            }
            console.log(s);
        });
        this.once("one", function ()
        {
            console.log("single event occurred!");
        });
    }
};
