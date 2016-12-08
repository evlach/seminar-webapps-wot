"use strict";
try
{
    const m = 1;
    const n = m + z;
}
catch (err) 
{
    console.error(err instanceof ReferenceError);
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
}