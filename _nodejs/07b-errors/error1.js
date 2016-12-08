"use strict";
const CustomError = require("./custom-error");
try
{
    throw new CustomError();
}
catch (err) 
{
    console.error(err instanceof CustomError);
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
}