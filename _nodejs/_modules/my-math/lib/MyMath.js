"use strict";

module.exports = class MyMath {
    static add(a, b)
    {
        if(typeof a !== "number")
        {
            throw new TypeError(`${typeof a}: '${a}' is not a valid number.`);
        }
        if(typeof b !== "number")
        {
            throw new TypeError(`${typeof b}: '${b}' is not a valid number.`);
        }
        return a + b;
    }
};