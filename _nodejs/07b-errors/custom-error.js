"use strict";
module.exports = class CustomError extends Error
{
    constructor(msg)
    {
        super();
        this.name = this.constructor.name;
        this.message = msg || CustomError.defaultMessage;
    }

    static get defaultMessage()
    {
        return "Customized Error";
    }
};